// 2. In-memory meeting database used to power the app during this assignment.
// This module stores sample meetings and provides helpers for retrieving one meeting or all meetings.
import type { SacramentMeeting } from "./types";

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: "2026-05-03",
    meetingType: "regular",
    presiding: "Bishop Smith",
    conducting: "Brother Jones",
    openingHymn: { number: 2, title: "The Spirit of God" },
    openingPrayer: "Sister Williams",
    wardBusiness: [{ description: "Sustaining of new Primary president" }],
    stakeBusiness: false,
    sacramentHymn: { number: 169, title: "In Remembrance of Thy Suffering" },
    speakers: [
      { name: "Sister Brown", topic: "Faith in Jesus Christ", type: "speaker" },
      { name: "Youth Choir", topic: "", type: "musical-number" },
    ],
    closingHymn: { number: 31, title: "O God, Our Help in Ages Past" },
    closingPrayer: "Brother Davis",
    announcements: ["Ward temple night: May 10"],
  },
  {
    id: 2,
    date: "2026-05-10",
    meetingType: "testimony",
    presiding: "Stake President Lewis",
    conducting: "Brother Wilson",
    openingHymn: { number: 132, title: "I Need Thee Every Hour" },
    openingPrayer: "Brother Carter",
    wardBusiness: [{ description: "Ward mission plan update" }],
    stakeBusiness: true,
    sacramentHymn: { number: 193, title: "Jesus of Nazareth, Savior and King" },
    speakers: [
      { name: "Sister Allen", topic: "Hope through adversity", type: "speaker" },
      { name: "Brother Kim", topic: "Service in the community", type: "speaker" },
    ],
    closingHymn: { number: 138, title: "As the Dew from Heaven Distilling" },
    closingPrayer: "Sister Morales",
    announcements: ["Wednesday youth activity", "Fast offering reminder"],
  },
  {
    id: 3,
    date: "2026-05-17",
    meetingType: "stake",
    presiding: "High Councilor Thomas",
    conducting: "Brother Nguyen",
    openingHymn: { number: 67, title: "How Gentle God's Commands" },
    openingPrayer: "Brother Patel",
    wardBusiness: [{ description: "Roadshow planning discussion" }],
    stakeBusiness: true,
    sacramentHymn: { number: 103, title: "Praise to the Man" },
    speakers: [{ name: "Brother Reed", topic: "Keeping covenants", type: "speaker" }],
    closingHymn: { number: 156, title: "We Thank Thee, O God, for a Prophet" },
    closingPrayer: "Sister Foster",
  },
  {
    id: 4,
    date: "2026-05-24",
    meetingType: "general",
    presiding: "Elder Brooks",
    conducting: "Sister Bennett",
    openingHymn: { number: 87, title: "I Know That My Redeemer Lives" },
    openingPrayer: "Brother Mason",
    wardBusiness: [{ description: "Visiting teaching assignments" }],
    stakeBusiness: false,
    sacramentHymn: { number: 198, title: "Behold the Great Redeemer Die" },
    speakers: [
      { name: "Brother Ortiz", topic: "The blessings of temple work", type: "speaker" },
      { name: "Ward Choir", topic: "", type: "musical-number" },
    ],
    closingHymn: { number: 152, title: "Praise to the Lord, the Almighty" },
    closingPrayer: "Sister Cruz",
    announcements: ["Relief Society social this weekend"],
  },
  {
    id: 5,
    date: "2026-07-05",
    meetingType: "regular",
    presiding: "Bishop Smith",
    conducting: "Sister Harper",
    openingHymn: { number: 21, title: "Come, Come, Ye Saints" },
    openingPrayer: "Brother Evans",
    wardBusiness: [{ description: "Summer youth conference preparation" }],
    stakeBusiness: false,
    sacramentHymn: { number: 173, title: "While of These Emblems We Partake" },
    speakers: [
      { name: "Sister Green", topic: "Peace through prayer", type: "speaker" },
      { name: "Brother Hale", topic: "The joy of service", type: "speaker" },
    ],
    closingHymn: { number: 126, title: "God Be with You Till We Meet Again" },
    closingPrayer: "Brother White",
    announcements: ["Ward picnic next Sunday"],
  },
];

export function getMeetings(date?: string | null): SacramentMeeting[] {
  if (date) {
    return meetings.filter((meeting) => meeting.date === date);
  }

  return meetings;
}

export function getMeetingById(id: number): SacramentMeeting | null {
  return meetings.find((meeting) => meeting.id === id) ?? null;
}