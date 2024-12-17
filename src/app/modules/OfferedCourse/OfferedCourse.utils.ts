import { TSchedule } from './OfferedCourse.interface';

export const hasTimeConflict = (
  assignSchedules: TSchedule[],
  newSchedule: TSchedule,
) => {
  for (const schedule of assignSchedules) {
    const existingStartTime = new Date(`1970-01-01T${schedule.startTime}`);
    const existingEndTime = new Date(`1970-01-01T${schedule.endTime}`);
    const newStartTime = new Date(`1970-01-01T${newSchedule.startTime}`);
    const newEndTime = new Date(`1970-01-01T${newSchedule.endTime}`);

    // 10:30 - 12:30
    // 11:30 - 1.30

    if (newStartTime < existingEndTime && newEndTime > existingStartTime) {
      //   console.log('yes');
      return true;
    }
  }
  //   assignSchedules.forEach((schedule) => {});

  return false;
};
