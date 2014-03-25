// TODO: AST 词法&语法分析。

var fs = require("fs");

module.exports = function(data, options){

  var locale_content = '{\n';
  var locale_path = '';
  var locale_name = '';
  var source_code = data;

  var RE_VAR_NAME_REQUIRE = /\define\(.*?\bfunction\(([a-zA-Z0-9_]+)[^\)]*\)\{/;

  var RE_REQUIRE = /\brequire\((["'][^\1]+?)\1\)/;
  var RE_DEFINED_LOCALES = /\{locale(?:\:([^\}]*))?\}/;

  var rst0;
  var match_locale_name;
  while(rst0 = RE_REQUIRE.exec(source_code)){
    if( match_locale_name = RE_DEFINED_LOCALES.exec(rst0[2]) ){
      locale_path = rst0[2];
      locale_name = match_locale_name[1];
    }
  }

  var RE_VAR_NAME_GETTEXT = /\b([a-zA-Z0-9_]+)\s*=\s*require\s*\((["'])gettext\2\)/;
  // 定义 gettext 实例的变量名。
  var S_RE_VAR_NAME_gettext = '\\b([a-zA-Z0-9_]+)\\s*=\\s*new\\s+{GETTEXT}\\s*\\(';
  // 调用 gettext("sid") 方法。
  var S_RE_METHOD_NAME_gettext = '\\b{gettext}\\s*\\(\\s*(["\'])([^\\1]*?)\\1';

  var RE_SPEC_CHARS = /\\/g;
  var S_REPLACE_SPEC_CHARS = '\\\\';

  var m = RE_VAR_NAME_GETTEXT.exec(source_code);
  if(m && m[1]){

    var GETTEXT = m[1];
    var RE_VAR_NAME_gettext = new RegExp(S_RE_VAR_NAME_gettext.replace('{GETTEXT}', GETTEXT));

    var m2 = RE_VAR_NAME_gettext.exec(source_code);
    if(m2 && m2[1]){

      var gettext = m2[1];
      var RE_METHOD_NAME_gettext = new RegExp(S_RE_METHOD_NAME_gettext.replace('{gettext}', gettext), 'g');

      var rst;
      var sid;
      while(rst = RE_METHOD_NAME_gettext.exec(source_code)){
        sid = rst[2];
        locale_content += '  "' + sid + '": "' + sid + '",\n';
      }

    }

  }

  return {
    names: locale_name,
    path: locale_path,
    content: locale_content.replace(/,\n$/, '') + '\n}'
  };

};
