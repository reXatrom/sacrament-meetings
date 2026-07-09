// 1. Type definitions for the sacrament meeting planner data model.
// These interfaces describe the structure of each meeting, including its type, hymns, speakers, and business notes.
export type MeetingType =
    | 'testimony'
    | 'regular'
    | 'stake'
    | 'general';

export interface Hymn {
    number: number;
    title: string;
}

export interface SpeakerItem {
    name: string;
    topic: string;
    type: 'speaker' | 'musical-number';
}

export interface WardBusinessItem {
    description: string;
}

export interface SacramentMeeting {
    id: number;
    date: string;              // ISO date string: 'YYYY-MM-DD'
    meetingType: MeetingType;
    presiding: string;
    conducting: string;
    announcements?: string[];
    openingHymn: Hymn;
    openingPrayer: string;
    wardBusiness: WardBusinessItem[];
    stakeBusiness: boolean;
    sacramentHymn: Hymn;
    speakers: SpeakerItem[];
    closingHymn: Hymn;
    closingPrayer: string;
}