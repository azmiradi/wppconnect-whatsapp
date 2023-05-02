export default {
  secretKey: 'THISISMYSECURETOKEN',
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 8080,
  //host: 'http://localhost',
  //port: '21465',
  deviceName: 'AzRWtsapp',
  poweredBy: 'WPPConnect-Server',
  startAllSession: true,
  tokenStoreType: 'redis',
  maxListeners: 15,
  customUserDataDir: './userDataDir/',
  webhook: {
    url: null,
    autoDownload: true,
    uploadS3: false,
    readMessage: true,
    allUnreadOnStart: false,
    listenAcks: true,
    onPresenceChanged: true,
    onParticipantsChanged: true,
    onReactionMessage: true,
    onPollResponse: true,
    onRevokedMessage: true,
  },
  archive: {
    enable: false,
    waitTime: 10,
    daysToArchive: 45,
  },
  log: {
    level: 'silly', // Before open a issue, change level to silly and retry a action
    logger: ['console', 'file'],
  },
  createOptions: {
    browserArgs: [
      '--disable-web-security',
      '--no-sandbox',
      '--disable-web-security',
      '--aggressive-cache-discard',
      '--disable-cache',
      '--disable-application-cache',
      '--disable-offline-load-stale-cache',
      '--disk-cache-size=0',
      '--disable-background-networking',
      '--disable-default-apps',
      '--disable-extensions',
      '--disable-sync',
      '--disable-translate',
      '--hide-scrollbars',
      '--metrics-recording-only',
      '--mute-audio',
      '--no-first-run',
      '--safebrowsing-disable-auto-update',
      '--ignore-certificate-errors',
      '--ignore-ssl-errors',
      '--ignore-certificate-errors-spki-list',
    ],
  },
  mapper: {
    enable: false,
    prefix: 'tagone-',
  },
  db: {
    mongodbDatabase: 'tokens',
    mongodbCollection: '',
    mongodbUser: 'whatsappproject',
    mongodbPassword: '01147598412',
    mongodbHost: 'cluster0.ytfhguh.mongodb.net',
    mongoIsRemote: true,
    mongoURLRemote: 'mongodb+srv://whatsappproject:01147598412@cluster0.ytfhguh.mongodb.net',
    mongodbPort: 27017,
    redisHost: 'redis-19327.c281.us-east-1-2.ec2.cloucled.redislabs.com',
    redisPort: 19327,
    redisPassword: 'LjHg1HyIXXxbRUoz9wrdz9k6mUOXtylf',
    redisDb: 11628345,
    redisPrefix: 'docker',
    },
 };
//
// export default {
//   secretKey: 'THISISMYSECURETOKEN',
//   host: process.env.HOST || '0.0.0.0',
//   port: process.env.PORT || 8080,
//   deviceName: 'WppConnect',
//   poweredBy: 'WPPConnect-Server',
//   startAllSession: true,
//   tokenStoreType: 'file',
//   maxListeners: 15,
//   customUserDataDir: './userDataDir/',
//   webhook: {
//     url: null,
//     autoDownload: true,
//     uploadS3: false,
//     readMessage: true,
//     allUnreadOnStart: false,
//     listenAcks: true,
//     onPresenceChanged: true,
//     onParticipantsChanged: true,
//     onReactionMessage: true,
//     onPollResponse: true,
//     onRevokedMessage: true,
//   },
//   archive: {
//     enable: false,
//     waitTime: 10,
//     daysToArchive: 45,
//   },
//   log: {
//     level: 'silly', // Before open a issue, change level to silly and retry a action
//     logger: ['console', 'file'],
//   },
//   createOptions: {
//     browserArgs: [
//       '--disable-web-security',
//       '--no-sandbox',
//       '--disable-web-security',
//       '--aggressive-cache-discard',
//       '--disable-cache',
//       '--disable-application-cache',
//       '--disable-offline-load-stale-cache',
//       '--disk-cache-size=0',
//       '--disable-background-networking',
//       '--disable-default-apps',
//       '--disable-extensions',
//       '--disable-sync',
//       '--disable-translate',
//       '--hide-scrollbars',
//       '--metrics-recording-only',
//       '--mute-audio',
//       '--no-first-run',
//       '--safebrowsing-disable-auto-update',
//       '--ignore-certificate-errors',
//       '--ignore-ssl-errors',
//       '--ignore-certificate-errors-spki-list',
//     ],
//   },
//   mapper: {
//     enable: false,
//     prefix: 'tagone-',
//   },
//   db: {
//     mongodbDatabase: 'tokens',
//     mongodbCollection: '',
//     mongodbUser: '',
//     mongodbPassword: '',
//     mongodbHost: '',
//     mongoIsRemote: true,
//     mongoURLRemote: '',
//     mongodbPort: 27017,
//     redisHost: 'localhost',
//     redisPort: 6379,
//     redisPassword: '',
//     redisDb: 0,
//     redisPrefix: 'docker',
//   },
// };