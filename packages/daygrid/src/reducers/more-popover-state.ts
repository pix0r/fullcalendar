import { Action } from '@fullcalendar/common'
import { MorePopoverState } from '../Table'

export function reduceMorePopover(currentMorePopoverState: MorePopoverState | null, action: Action, contextAndState: Object) {
  console.log('reduceMorePopover arguments:', arguments);
  switch (action && action.type) {
    case "CLOSE_MORE_POPOVER":
      console.log("CLOSE_MORE_POPOVER");
      // return null;
      break;
    default:
      // return currentMorePopoverState;
      break;
  }
  return contextAndState;
}
