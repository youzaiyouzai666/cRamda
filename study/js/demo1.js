/**
 * Created by Administrator on 2017/1/17.
 */
// 命令式版本:
// 太多 if-else 和 null 检查；依赖于全局 indexURLs；
// "en" URL 是所有国家的默认值
const getUrlForUser = (user) => {
    if (user == null) {        // 没有登录进来
        return indexURLs['en'];  // 返回默认页
    }
    if (user.prefs.languages.primary && user.prefs.languages.primary != 'undefined') {
        if (indexURLs[user.prefs.languages.primary]) { //如果翻译存在
            return indexURLs[user.prefs.languages.primary];
        } else {
            return indexURLs['en'];
        }
    }
};

//User 对象
let joeUser = {
    name: 'joe',
    email: 'joe@example.com',
    prefs: {
        languages: {
            primary: 'sp',
            secondary: 'en'
        }
    }
};

//全局的 indexURLs，映射不同的语言
let indexURLs = {
    'en': 'http://mysite.com/en',  //English
    'sp': 'http://mysite.com/sp', //Spanish
    'jp': 'http://mysite.com/jp'   //Japanese
}

//应用 url 到 window.location
const showIndexPage = (url) => { window.location = url };
//调用
showIndexPage(getUrlForUser(joeUser));