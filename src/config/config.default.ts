import { MidwayConfig, MidwayAppInfo } from '@midwayjs/core';
import { UserEntity } from '../entity/user.entity';

export default (appInfo: MidwayAppInfo) => {
  return {
    // use for cookie sign key, should change to your own and keep security
    keys: appInfo.name + '_1659448685536_3346',
    egg: {
      port: 7001,
    },
    typeorm: {
      dataSource: {
        default: {
          type: 'sqlite',
          database: ':memory:',
          synchronize: true,
          logging: true,
          entities: [UserEntity],
          // ...
        },
      },
    },
    // security: {
    //   csrf: false,
    // },
    jwt: {
      secret: 'secret123456',
      expiresIn: '60 * 60 * 24',
    },
  } as MidwayConfig;
};
