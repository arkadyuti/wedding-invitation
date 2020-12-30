/*
 * CountDown Messages
 *
 * This contains all the text for the CountDown component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.CountDown';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the CountDown component!',
  },
});
