import cron from 'node-cron';
import { createHackaton } from './createHackaton';

createHackaton();

cron.schedule('0 */5 * * * *', () =>  {
  console.log('will execute every minute until stopped');
});

export default {
    cron
}