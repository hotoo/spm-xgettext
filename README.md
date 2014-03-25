# Spm xgettext

[![David Status](https://david-dm.org/spmjs/spm-xgettext.png)](https://david-dm.org/spmjs/spm-xgettext)

spm-xgettext is a scaffolding tool used to automate project locale creation.

---

## Install

```
$ npm install spm-xgettext -g
```

## Usage

```
$ spm-xgettext [locales]
```

If you have installed [spm2](https://github.com/spmjs/spm2):

```
$ spm xgettext [locales]
```

## package, category and domain

GNU `gettext` using package, category and domain to set locale message and
resource paths.

CMD `gettext` not need this, but default using:

```
  package locale     category  domain
    |        |          |        |
  ------ -------- ...-------- -------
./locale/{locale}/LC_MESSAGES/name.js
```
The default path is `./locale/{locale}/LC_MESSAGES/module_name.js`,
you can config `~/.spm/spmrc`

```
[xgettext]
locale_path = ./locale/{locale}/LC_MESSAGES.js
```
