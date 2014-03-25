# Spm xgettext

spm 初始化命令

---

## 安装

```
$ npm install spm-xgettext -g
```

## 使用

```
$ spm-xgettext
```

如果已经安装 [spm2](https://github.com/spmjs/spm2) 可运行

```
$ spm xgettext
```

## 包(package)，类别(category)，和域(domain)

GNU `gettext` 通过包(package)，类别(category)，和域(domain) 来指定本地方言和
资源目录。

CMD `gettext` 中这些不是必须的，但默认情况下仍然遵循 GNU 的习惯。

```
  package locale     category  domain
    |        |          |        |
  ------ -------- ...-------- -------
./locale/{locale}/LC_MESSAGES/name.js
```

目录的本地方言和路径为 `./locale/{locale}/LC_MESSAGES/module_name.js`，
你可以在 `~/.spm/spmrc` 中进行修改配置，例如：

```
[xgettext]
locale_path = ./locale/{locale}/LC_MESSAGES.js
```
