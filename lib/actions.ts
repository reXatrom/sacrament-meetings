'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import {
  addMeeting,
  deleteMeeting as deleteMeetingInDatabase,
  updateMeeting as updateMeetingInDatabase,
} from './meetings-db';
import type { SacramentMeeting } from './types';

export type MeetingActionState = {
  message?: string;
  errors?: Record<string, string[] | undefined>;
};

export const initialState: MeetingActionState = {
  message: '',
  errors: {},
};

const lineItems = (value: string) =>
  value
    .split('\n')
    .map((item) => item.trim())
    .filter(Boolean);

export const MeetingFormSchema = z.object({
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Enter a valid date.'),
  meetingType: z.enum(['testimony', 'regular', 'stake', 'general']),
  presiding: z.string().trim().min(1, 'Presiding is required.'),
  conducting: z.string().trim().min(1, 'Conducting is required.'),

  announcements: z.string().transform(lineItems),

  openingHymnNumber: z.coerce.number().int().positive(),
  openingHymnTitle: z.string().trim().min(1),
  openingPrayer: z.string().trim().min(1),

  wardBusiness: z.string().transform((value) =>
    lineItems(value).map((description) => ({ description }))
  ),
stakeBusiness: z.preprocess(
  (value) => value === 'true' || value === 'on',
  z.boolean()
),
  sacramentHymnNumber: z.coerce.number().int().positive(),
  sacramentHymnTitle: z.string().trim().min(1),

  // One line per item: Name | Topic | speaker
  // Or: Name | Musical number title | musical-number
  speakers: z
  .string()
  .transform((value): SacramentMeeting['speakers'] =>
    lineItems(value).map((line) => {
      const [name, topic, rawType = 'speaker'] = line
        .split('|')
        .map((part) => part.trim());

      const type: 'speaker' | 'musical-number' =
        rawType === 'musical-number' ? 'musical-number' : 'speaker';

      return {
        name,
        topic,
        type,
      };
    })
  )
  .refine(
    (items) =>
      items.every(
        (item) => item.name.length > 0 && item.topic.length > 0
      ),
    {
      message:
        'Each speaker must be in the format: Name | Topic | speaker',
    }
  ),

  closingHymnNumber: z.coerce.number().int().positive(),
  closingHymnTitle: z.string().trim().min(1),
  closingPrayer: z.string().trim().min(1),
});

function parseMeeting(formData: FormData): Omit<SacramentMeeting, 'id'> {
  const parsed = MeetingFormSchema.safeParse({
    date: formData.get('date'),
    meetingType: formData.get('meetingType'),
    presiding: formData.get('presiding'),
    conducting: formData.get('conducting'),
    announcements: formData.get('announcements'),

    openingHymnNumber: formData.get('openingHymnNumber'),
    openingHymnTitle: formData.get('openingHymnTitle'),
    openingPrayer: formData.get('openingPrayer'),

    wardBusiness: formData.get('wardBusiness'),
    stakeBusiness: formData.get('stakeBusiness'),

    sacramentHymnNumber: formData.get('sacramentHymnNumber'),
    sacramentHymnTitle: formData.get('sacramentHymnTitle'),

    speakers: formData.get('speakers'),

    closingHymnNumber: formData.get('closingHymnNumber'),
    closingHymnTitle: formData.get('closingHymnTitle'),
    closingPrayer: formData.get('closingPrayer'),
  });

  if (!parsed.success) {
    throw new Error(
        parsed.error.issues
            .map((issue) => `• ${issue.message}`)
            .join('\n')
    );
}

  const data = parsed.data;

  return {
    date: data.date,
    meetingType: data.meetingType,
    presiding: data.presiding,
    conducting: data.conducting,
    announcements: data.announcements,

    openingHymn: {
      number: data.openingHymnNumber,
      title: data.openingHymnTitle,
    },
    openingPrayer: data.openingPrayer,

    wardBusiness: data.wardBusiness,
    stakeBusiness: data.stakeBusiness,

    sacramentHymn: {
      number: data.sacramentHymnNumber,
      title: data.sacramentHymnTitle,
    },

    speakers: data.speakers,

    closingHymn: {
      number: data.closingHymnNumber,
      title: data.closingHymnTitle,
    },
    closingPrayer: data.closingPrayer,
  };
}

export async function createMeeting(formData: FormData) {
  try {
    const meeting = parseMeeting(formData);

    await addMeeting(meeting);
  } catch (error) {
    console.error('Create meeting failed:', error);
    throw new Error('Unable to create the meeting.');
  }

  revalidatePath('/meetings');
  redirect('/meetings');
}

export async function updateMeeting(
  id: number,
  formData: FormData
) {
  const meeting = parseMeeting(formData);

  try {
    const updated = await updateMeetingInDatabase(id, meeting);

    if (!updated) {
      throw new Error('Meeting not found.');
    }
  } catch (error) {
    console.error('Update meeting failed:', error);
    throw new Error('Unable to update the meeting.');
  }

  revalidatePath('/meetings');
  redirect('/meetings');
}

export async function deleteMeeting(formData: FormData) {
  const result = z.coerce
    .number()
    .int()
    .positive()
    .safeParse(formData.get('id'));

  if (!result.success) {
    throw new Error('Invalid meeting id.');
  }

  try {
    const deleted = await deleteMeetingInDatabase(result.data);

    if (!deleted) {
      throw new Error('Meeting not found.');
    }
  } catch (error) {
    console.error('Delete meeting failed:', error);
    throw new Error('Unable to delete the meeting.');
  }

  revalidatePath('/meetings');
  redirect('/meetings');
}