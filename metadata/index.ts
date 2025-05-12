import type { Creator } from '../scripts/types/metadata'
import { getAvatarUrlByGithubName } from '../scripts/utils'

/** 文本 */
export const siteName = '新手爸妈'
export const siteShortName = '新手爸妈'
export const siteDescription = '记录回忆，知识和畅想的地方'

/** 文档所在目录 */
export const include = ['笔记', '生活']

/** Repo */
export const githubRepoLink = 'https://github.com/nolebase/nolebase'


/** 无协议前缀域名 */
export const plainTargetDomain = 'nolebase.ayaka.io'
/** 完整域名 */
export const targetDomain = `https://${plainTargetDomain}`

/** 创作者 */
export const creators: Creator[] = [
  {
    name: '新手爸妈-大杨',
    avatar: '',
    username: 'eason2young',
    title: '新手爸妈主播',
    desc: '新手爸爸，工程师',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/yiyoung92' },
    ],
    nameAliases: ['新手爸妈-大杨', 'Eason', 'Eason2young', 'Eason Yang'],
    emailAliases: ['eason2young@163.com'],
  },
  {
    name: '新手爸妈-钱钱',
    avatar: '',
    username: '钱钱',
    title: '新手爸妈主播',
    desc: '新手妈妈，医生',
    links: [
      { type: 'github', icon: 'github', link: '' },
    ],
    nameAliases: ['新手爸妈-钱钱', 'QianQ', 'Qian Qian', '钱钱', 'Qian Qian 钱'],
    emailAliases: [],
  },
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrlByGithubName(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
