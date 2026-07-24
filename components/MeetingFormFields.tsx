'use client';

import type { SacramentMeeting } from '@/lib/types';
import type { MeetingActionState } from '@/lib/actions';

type MeetingFormFieldsProps = {
  errors?: MeetingActionState['errors'];
  meeting?: SacramentMeeting;
};

function FieldError({ name, errors }: { name: string; errors?: MeetingActionState['errors'] }) {
  return (
    <div id={`${name}-error`} aria-live="polite" className="mt-1 text-sm text-red-600">
      {errors?.[name]?.map((error) => <p key={error}>{error}</p>)}
    </div>
  );
}

export function MeetingFormFields({ errors, meeting }: MeetingFormFieldsProps) {
  const inputClass = 'mt-1 w-full rounded-md border border-slate-300 px-3 py-2';
  const textareaClass = `${inputClass} min-h-24`;

  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div><label htmlFor="date">Meeting date</label><input id="date" name="date" type="date" defaultValue={meeting?.date} aria-describedby="date-error" aria-invalid={Boolean(errors?.date)} className={inputClass} /><FieldError name="date" errors={errors} /></div>
        <div><label htmlFor="meetingType">Meeting type</label><select id="meetingType" name="meetingType" defaultValue={meeting?.meetingType ?? 'regular'} aria-describedby="meetingType-error" aria-invalid={Boolean(errors?.meetingType)} className={inputClass}><option value="regular">Regular</option><option value="testimony">Testimony</option><option value="stake">Stake</option><option value="general">General</option></select><FieldError name="meetingType" errors={errors} /></div>
        <div><label htmlFor="presiding">Presiding</label><input id="presiding" name="presiding" defaultValue={meeting?.presiding} aria-describedby="presiding-error" aria-invalid={Boolean(errors?.presiding)} className={inputClass} /><FieldError name="presiding" errors={errors} /></div>
        <div><label htmlFor="conducting">Conducting</label><input id="conducting" name="conducting" defaultValue={meeting?.conducting} aria-describedby="conducting-error" aria-invalid={Boolean(errors?.conducting)} className={inputClass} /><FieldError name="conducting" errors={errors} /></div>
      </div>

      <div><label htmlFor="announcements">Announcements</label><textarea id="announcements" name="announcements" defaultValue={meeting?.announcements?.join('\n')} aria-describedby="announcements-error" aria-invalid={Boolean(errors?.announcements)} className={textareaClass} /><FieldError name="announcements" errors={errors} /></div>

      <fieldset className="grid gap-4 rounded-md border border-slate-200 p-4 sm:grid-cols-2"><legend>Opening hymn</legend><div><label htmlFor="openingHymnNumber">Hymn number</label><input id="openingHymnNumber" name="openingHymnNumber" type="number" min="1" defaultValue={meeting?.openingHymn.number} aria-describedby="openingHymnNumber-error" aria-invalid={Boolean(errors?.openingHymnNumber)} className={inputClass} /><FieldError name="openingHymnNumber" errors={errors} /></div><div><label htmlFor="openingHymnTitle">Hymn title</label><input id="openingHymnTitle" name="openingHymnTitle" defaultValue={meeting?.openingHymn.title} aria-describedby="openingHymnTitle-error" aria-invalid={Boolean(errors?.openingHymnTitle)} className={inputClass} /><FieldError name="openingHymnTitle" errors={errors} /></div><div className="sm:col-span-2"><label htmlFor="openingPrayer">Opening prayer</label><input id="openingPrayer" name="openingPrayer" defaultValue={meeting?.openingPrayer} aria-describedby="openingPrayer-error" aria-invalid={Boolean(errors?.openingPrayer)} className={inputClass} /><FieldError name="openingPrayer" errors={errors} /></div></fieldset>

      <div><label htmlFor="wardBusiness">Ward business</label><textarea id="wardBusiness" name="wardBusiness" defaultValue={meeting?.wardBusiness.map((item) => item.description).join('\n')} aria-describedby="wardBusiness-error" aria-invalid={Boolean(errors?.wardBusiness)} className={textareaClass} /><FieldError name="wardBusiness" errors={errors} /></div>
      <fieldset><legend>Stake business</legend><div className="mt-2 flex gap-4"><label htmlFor="stakeBusiness-yes"><input id="stakeBusiness-yes" name="stakeBusiness" type="radio" value="true" defaultChecked={meeting?.stakeBusiness === true} aria-describedby="stakeBusiness-error" /> Yes</label><label htmlFor="stakeBusiness-no"><input id="stakeBusiness-no" name="stakeBusiness" type="radio" value="false" defaultChecked={meeting?.stakeBusiness !== true} aria-describedby="stakeBusiness-error" /> No</label></div><FieldError name="stakeBusiness" errors={errors} /></fieldset>

      <fieldset className="grid gap-4 rounded-md border border-slate-200 p-4 sm:grid-cols-2"><legend>Sacrament hymn</legend><div><label htmlFor="sacramentHymnNumber">Hymn number</label><input id="sacramentHymnNumber" name="sacramentHymnNumber" type="number" min="1" defaultValue={meeting?.sacramentHymn.number} aria-describedby="sacramentHymnNumber-error" aria-invalid={Boolean(errors?.sacramentHymnNumber)} className={inputClass} /><FieldError name="sacramentHymnNumber" errors={errors} /></div><div><label htmlFor="sacramentHymnTitle">Hymn title</label><input id="sacramentHymnTitle" name="sacramentHymnTitle" defaultValue={meeting?.sacramentHymn.title} aria-describedby="sacramentHymnTitle-error" aria-invalid={Boolean(errors?.sacramentHymnTitle)} className={inputClass} /><FieldError name="sacramentHymnTitle" errors={errors} /></div></fieldset>

      <div><label htmlFor="speakers">Speakers or musical numbers</label><textarea id="speakers" name="speakers" defaultValue={meeting?.speakers.map((item) => `${item.name} | ${item.topic} | ${item.type}`).join('\n')} aria-describedby="speakers-error speakers-help" aria-invalid={Boolean(errors?.speakers)} className={textareaClass} /><p id="speakers-help" className="mt-1 text-sm text-slate-600">One per line: Name | Topic | speaker</p><FieldError name="speakers" errors={errors} /></div>

      <fieldset className="grid gap-4 rounded-md border border-slate-200 p-4 sm:grid-cols-2"><legend>Closing hymn</legend><div><label htmlFor="closingHymnNumber">Hymn number</label><input id="closingHymnNumber" name="closingHymnNumber" type="number" min="1" defaultValue={meeting?.closingHymn.number} aria-describedby="closingHymnNumber-error" aria-invalid={Boolean(errors?.closingHymnNumber)} className={inputClass} /><FieldError name="closingHymnNumber" errors={errors} /></div><div><label htmlFor="closingHymnTitle">Hymn title</label><input id="closingHymnTitle" name="closingHymnTitle" defaultValue={meeting?.closingHymn.title} aria-describedby="closingHymnTitle-error" aria-invalid={Boolean(errors?.closingHymnTitle)} className={inputClass} /><FieldError name="closingHymnTitle" errors={errors} /></div><div className="sm:col-span-2"><label htmlFor="closingPrayer">Closing prayer</label><input id="closingPrayer" name="closingPrayer" defaultValue={meeting?.closingPrayer} aria-describedby="closingPrayer-error" aria-invalid={Boolean(errors?.closingPrayer)} className={inputClass} /><FieldError name="closingPrayer" errors={errors} /></div></fieldset>
    </div>
  );
}
