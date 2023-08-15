import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/all-docs/__docusaurus/debug',
    component: ComponentCreator('/all-docs/__docusaurus/debug', 'c96'),
    exact: true
  },
  {
    path: '/all-docs/__docusaurus/debug/config',
    component: ComponentCreator('/all-docs/__docusaurus/debug/config', '64e'),
    exact: true
  },
  {
    path: '/all-docs/__docusaurus/debug/content',
    component: ComponentCreator('/all-docs/__docusaurus/debug/content', '2eb'),
    exact: true
  },
  {
    path: '/all-docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/all-docs/__docusaurus/debug/globalData', '492'),
    exact: true
  },
  {
    path: '/all-docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/all-docs/__docusaurus/debug/metadata', '1a1'),
    exact: true
  },
  {
    path: '/all-docs/__docusaurus/debug/registry',
    component: ComponentCreator('/all-docs/__docusaurus/debug/registry', '5bb'),
    exact: true
  },
  {
    path: '/all-docs/__docusaurus/debug/routes',
    component: ComponentCreator('/all-docs/__docusaurus/debug/routes', 'e01'),
    exact: true
  },
  {
    path: '/all-docs/blog',
    component: ComponentCreator('/all-docs/blog', '14f'),
    exact: true
  },
  {
    path: '/all-docs/blog/archive',
    component: ComponentCreator('/all-docs/blog/archive', '2cd'),
    exact: true
  },
  {
    path: '/all-docs/blog/first-blog-post',
    component: ComponentCreator('/all-docs/blog/first-blog-post', 'c66'),
    exact: true
  },
  {
    path: '/all-docs/blog/long-blog-post',
    component: ComponentCreator('/all-docs/blog/long-blog-post', 'cd4'),
    exact: true
  },
  {
    path: '/all-docs/blog/mdx-blog-post',
    component: ComponentCreator('/all-docs/blog/mdx-blog-post', '055'),
    exact: true
  },
  {
    path: '/all-docs/blog/tags',
    component: ComponentCreator('/all-docs/blog/tags', '0cc'),
    exact: true
  },
  {
    path: '/all-docs/blog/tags/docusaurus',
    component: ComponentCreator('/all-docs/blog/tags/docusaurus', '9ab'),
    exact: true
  },
  {
    path: '/all-docs/blog/tags/facebook',
    component: ComponentCreator('/all-docs/blog/tags/facebook', 'e23'),
    exact: true
  },
  {
    path: '/all-docs/blog/tags/hello',
    component: ComponentCreator('/all-docs/blog/tags/hello', 'f8a'),
    exact: true
  },
  {
    path: '/all-docs/blog/tags/hola',
    component: ComponentCreator('/all-docs/blog/tags/hola', 'ea9'),
    exact: true
  },
  {
    path: '/all-docs/blog/welcome',
    component: ComponentCreator('/all-docs/blog/welcome', 'b46'),
    exact: true
  },
  {
    path: '/all-docs/docs',
    component: ComponentCreator('/all-docs/docs', 'a87'),
    routes: [
      {
        path: '/all-docs/docs/category/accounts',
        component: ComponentCreator('/all-docs/docs/category/accounts', '5d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/category/api-documents',
        component: ComponentCreator('/all-docs/docs/category/api-documents', '5ec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/category/chain-explorer',
        component: ComponentCreator('/all-docs/docs/category/chain-explorer', 'f3d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/category/cmix-dashboard',
        component: ComponentCreator('/all-docs/docs/category/cmix-dashboard', '703'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/category/gateway-computer',
        component: ComponentCreator('/all-docs/docs/category/gateway-computer', 'f3e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/category/governance',
        component: ComponentCreator('/all-docs/docs/category/governance', '6d0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/category/node-computer',
        component: ComponentCreator('/all-docs/docs/category/node-computer', '158'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/category/overview',
        component: ComponentCreator('/all-docs/docs/category/overview', '07b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/category/reference-guides',
        component: ComponentCreator('/all-docs/docs/category/reference-guides', '01f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/category/simple-staking',
        component: ComponentCreator('/all-docs/docs/category/simple-staking', 'cf2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/category/sleeve-wallet-generator',
        component: ComponentCreator('/all-docs/docs/category/sleeve-wallet-generator', '50a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/category/staking',
        component: ComponentCreator('/all-docs/docs/category/staking', 'd52'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/category/staking-the-validator',
        component: ComponentCreator('/all-docs/docs/category/staking-the-validator', 'c50'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/category/web-wallet',
        component: ComponentCreator('/all-docs/docs/category/web-wallet', 'f0e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/category/xx-chain',
        component: ComponentCreator('/all-docs/docs/category/xx-chain', 'a31'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/category/xx-cmix',
        component: ComponentCreator('/all-docs/docs/category/xx-cmix', 'dbb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/category/xx-node',
        component: ComponentCreator('/all-docs/docs/category/xx-node', 'd9a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/category/xx-tools',
        component: ComponentCreator('/all-docs/docs/category/xx-tools', 'c39'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/category/xxdk',
        component: ComponentCreator('/all-docs/docs/category/xxdk', '30c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/chain/',
        component: ComponentCreator('/all-docs/docs/chain/', 'ca2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/chain/API Documents/constants',
        component: ComponentCreator('/all-docs/docs/chain/API Documents/constants', '3ce'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/chain/API Documents/errors',
        component: ComponentCreator('/all-docs/docs/chain/API Documents/errors', 'de9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/chain/API Documents/events',
        component: ComponentCreator('/all-docs/docs/chain/API Documents/events', '110'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/chain/API Documents/extrinsics',
        component: ComponentCreator('/all-docs/docs/chain/API Documents/extrinsics', '909'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/chain/API Documents/rpc',
        component: ComponentCreator('/all-docs/docs/chain/API Documents/rpc', '9b3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/chain/API Documents/runtime',
        component: ComponentCreator('/all-docs/docs/chain/API Documents/runtime', '74c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/chain/API Documents/storage',
        component: ComponentCreator('/all-docs/docs/chain/API Documents/storage', '903'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/cmix/',
        component: ComponentCreator('/all-docs/docs/cmix/', '31b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/cmix/xxdk/getting-started',
        component: ComponentCreator('/all-docs/docs/cmix/xxdk/getting-started', '8dd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/cmix/xxdk/guides/cmix-client-keystore',
        component: ComponentCreator('/all-docs/docs/cmix/xxdk/guides/cmix-client-keystore', '738'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/cmix/xxdk/guides/ndf-retrieval',
        component: ComponentCreator('/all-docs/docs/cmix/xxdk/guides/ndf-retrieval', 'fe6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/cmix/xxdk/mobile docs/ios-sdk',
        component: ComponentCreator('/all-docs/docs/cmix/xxdk/mobile docs/ios-sdk', '8e2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/cmix/xxdk/overview',
        component: ComponentCreator('/all-docs/docs/cmix/xxdk/overview', '178'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/cmix/xxdk/quick-reference',
        component: ComponentCreator('/all-docs/docs/cmix/xxdk/quick-reference', '3e0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/cmix/xxdk/technical-glossary',
        component: ComponentCreator('/all-docs/docs/cmix/xxdk/technical-glossary', 'ea5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/intro',
        component: ComponentCreator('/all-docs/docs/intro', '7e4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/node/basic-linux-help',
        component: ComponentCreator('/all-docs/docs/node/basic-linux-help', '707'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/node/gateway-configuration/clock-syncronization',
        component: ComponentCreator('/all-docs/docs/node/gateway-configuration/clock-syncronization', '9ed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/node/gateway-configuration/gateway-config',
        component: ComponentCreator('/all-docs/docs/node/gateway-configuration/gateway-config', '26c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/node/gateway-configuration/gateway-database',
        component: ComponentCreator('/all-docs/docs/node/gateway-configuration/gateway-database', 'f3c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/node/gateway-configuration/gateway-firewall',
        component: ComponentCreator('/all-docs/docs/node/gateway-configuration/gateway-firewall', 'd35'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/node/gateway-configuration/gateway-port-forwarding',
        component: ComponentCreator('/all-docs/docs/node/gateway-configuration/gateway-port-forwarding', 'd6f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/node/gateway-configuration/gateway-services-config',
        component: ComponentCreator('/all-docs/docs/node/gateway-configuration/gateway-services-config', 'c35'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/node/gateway-configuration/gateway-tarballs',
        component: ComponentCreator('/all-docs/docs/node/gateway-configuration/gateway-tarballs', '682'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/node/gateway-configuration/getting-started',
        component: ComponentCreator('/all-docs/docs/node/gateway-configuration/getting-started', '128'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/node/gateway-configuration/software-dependencies',
        component: ComponentCreator('/all-docs/docs/node/gateway-configuration/software-dependencies', '698'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/node/gateway-configuration/tcp-settings',
        component: ComponentCreator('/all-docs/docs/node/gateway-configuration/tcp-settings', '818'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/node/gateway-configuration/transfer-creds',
        component: ComponentCreator('/all-docs/docs/node/gateway-configuration/transfer-creds', '0b4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/node/install-overview',
        component: ComponentCreator('/all-docs/docs/node/install-overview', 'da9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/node/intro',
        component: ComponentCreator('/all-docs/docs/node/intro', '54b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/node/node-configuration/clock-syncronization',
        component: ComponentCreator('/all-docs/docs/node/node-configuration/clock-syncronization', '094'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/node/node-configuration/generate-creds',
        component: ComponentCreator('/all-docs/docs/node/node-configuration/generate-creds', 'ca6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/node/node-configuration/getting-started',
        component: ComponentCreator('/all-docs/docs/node/node-configuration/getting-started', 'ca5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/node/node-configuration/node-config',
        component: ComponentCreator('/all-docs/docs/node/node-configuration/node-config', 'e72'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/node/node-configuration/node-database',
        component: ComponentCreator('/all-docs/docs/node/node-configuration/node-database', '08f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/node/node-configuration/node-firewall',
        component: ComponentCreator('/all-docs/docs/node/node-configuration/node-firewall', '74d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/node/node-configuration/node-port-forwarding',
        component: ComponentCreator('/all-docs/docs/node/node-configuration/node-port-forwarding', '5e2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/node/node-configuration/node-services-config',
        component: ComponentCreator('/all-docs/docs/node/node-configuration/node-services-config', '388'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/node/node-configuration/node-tarballs',
        component: ComponentCreator('/all-docs/docs/node/node-configuration/node-tarballs', '686'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/node/node-configuration/software-dependencies',
        component: ComponentCreator('/all-docs/docs/node/node-configuration/software-dependencies', '305'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/node/node-configuration/tcp-settings',
        component: ComponentCreator('/all-docs/docs/node/node-configuration/tcp-settings', '6dc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/node/specifications',
        component: ComponentCreator('/all-docs/docs/node/specifications', '329'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/node/validator-staking/accounts',
        component: ComponentCreator('/all-docs/docs/node/validator-staking/accounts', 'f67'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/node/validator-staking/getting-started',
        component: ComponentCreator('/all-docs/docs/node/validator-staking/getting-started', 'd39'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/node/validator-staking/session-keys',
        component: ComponentCreator('/all-docs/docs/node/validator-staking/session-keys', '07d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/node/validator-staking/validator-status',
        component: ComponentCreator('/all-docs/docs/node/validator-staking/validator-status', '2f5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/overview/chain',
        component: ComponentCreator('/all-docs/docs/overview/chain', '419'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/overview/cmix',
        component: ComponentCreator('/all-docs/docs/overview/cmix', 'da4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/overview/xxnetwork',
        component: ComponentCreator('/all-docs/docs/overview/xxnetwork', 'e6f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/todo',
        component: ComponentCreator('/all-docs/docs/todo', 'b97'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/tools/dashboard/',
        component: ComponentCreator('/all-docs/docs/tools/dashboard/', '5c7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/tools/explorer/',
        component: ComponentCreator('/all-docs/docs/tools/explorer/', 'e7a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/tools/simpleStaking/',
        component: ComponentCreator('/all-docs/docs/tools/simpleStaking/', '9a6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/tools/sleeve/',
        component: ComponentCreator('/all-docs/docs/tools/sleeve/', '27a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/tools/webWallet/',
        component: ComponentCreator('/all-docs/docs/tools/webWallet/', 'a38'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/tools/webWallet/accounts/accountTypes',
        component: ComponentCreator('/all-docs/docs/tools/webWallet/accounts/accountTypes', '44c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/tools/webWallet/accounts/addAccount',
        component: ComponentCreator('/all-docs/docs/tools/webWallet/accounts/addAccount', 'b30'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/tools/webWallet/accounts/addContact',
        component: ComponentCreator('/all-docs/docs/tools/webWallet/accounts/addContact', '649'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/tools/webWallet/accounts/claim',
        component: ComponentCreator('/all-docs/docs/tools/webWallet/accounts/claim', 'd58'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/tools/webWallet/accounts/generateAccount',
        component: ComponentCreator('/all-docs/docs/tools/webWallet/accounts/generateAccount', '580'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/tools/webWallet/accounts/receive',
        component: ComponentCreator('/all-docs/docs/tools/webWallet/accounts/receive', 'e9c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/tools/webWallet/accounts/send',
        component: ComponentCreator('/all-docs/docs/tools/webWallet/accounts/send', '759'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/tools/webWallet/endpoints',
        component: ComponentCreator('/all-docs/docs/tools/webWallet/endpoints', '088'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/tools/webWallet/governance/voting',
        component: ComponentCreator('/all-docs/docs/tools/webWallet/governance/voting', '5f9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/tools/webWallet/staking/',
        component: ComponentCreator('/all-docs/docs/tools/webWallet/staking/', 'dde'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/tools/webWallet/staking/bond',
        component: ComponentCreator('/all-docs/docs/tools/webWallet/staking/bond', '278'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/tools/webWallet/staking/nominate',
        component: ComponentCreator('/all-docs/docs/tools/webWallet/staking/nominate', '595'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/tools/webWallet/staking/payout',
        component: ComponentCreator('/all-docs/docs/tools/webWallet/staking/payout', 'f6f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/tools/webWallet/staking/unbond',
        component: ComponentCreator('/all-docs/docs/tools/webWallet/staking/unbond', '5a5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/all-docs/docs/tools/webWallet/staking/validate',
        component: ComponentCreator('/all-docs/docs/tools/webWallet/staking/validate', 'dc9'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/all-docs/',
    component: ComponentCreator('/all-docs/', '6d9'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
