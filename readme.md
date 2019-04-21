# NumbersAPI-Parser
April 2019.

**Main page**
![main page](https://raw.githubusercontent.com/NikitosGolubev/images/master/numbersapi-parser.png)

**Front-end validation of data provided in forms**
![validation](https://raw.githubusercontent.com/NikitosGolubev/images/master/numbersapi-parser-validated.png)

**Report about parsed facts**
![report](https://raw.githubusercontent.com/NikitosGolubev/images/master/numbersapi-parser-report.png)

**Error pages (404, 403, 520, etc)**
![errors page](https://raw.githubusercontent.com/NikitosGolubev/images/master/numbersapi-parser-404.png)

# My memories
After my last project which was (Number-Facts-API), I've decided to develop an extension to it. I wanted to make it at pretty much the same design but with a different approach for the back-end. First of all, I relate this project with my solid decision to take the path of becoming a professional Laravel developer. I really like this framework, and from now on I've firmly taken such a responsible decision. The idea for this project has come to me when I wanted to test Number-Facts-API. I needed data to the database but I was so lazy to fill it manually. So, the thought of building an app that would deliver this data for me (parser), seemed great. Without further ado, I've started working.

# Project description
Well, before I started working, I decided to make a little research on how can I increase my knowledge with this project. And this action benefited a lot. First of all, in my last project, I've promised that I would find a way how to include my JS files without myriad of <script> tags and I found it! I've learned a lot about CommonJS modules and about exports which are not fully supported in modern browsers yet. I've decided to use exports. This has led me to the point where I had to learn what 'bundler' is and luckily I've faced with browserify which I awesomely integrated into my GULP build. Also, then I figured out that I also need babelify(feature for browserify) to make exports work. To be honest, the process of configuring all of these things (babelify, browserify) was pretty tough but finally, I got what was expected: fully supported functionality of export/export default constructions.

Also, I've decided to refuse from using Lumen in this project (like it was in Number-Facts-API) and I've started exploring Laravel. It's still a long journey for me but I've learned a lot only from this project yet.

Besides, I've finally replaced Sublime Text Editor with professional IDE (phpStorm). AND I DON'T REGRET. In fact, I really regret I've not done this earlier because it's significantly simplified the process of coding. Although I've spent some time learning a bunch of shortcuts, this has paid back to me later.

Now, I wanna mention some significant things I've done and realized during development.
1. I really need to learn any JS framework, at least basics. Writing my own MVC from scratch was very, very hard (it's funny when you do this first time, but when things started to get repeated, it's not really enjoyable). The mental debt is huge, and I definitely need to cut it down. I plan to get started with Vue JS because it seems like it perfectly fits with Laravel.
2. GULP is great, but ... Webpack is much better. So, I also need to explore this bundler.
3. App architecture, in fact, is a quite complicated thing, I obviously need to learn more about refactoring and about building clean independent architecture itself.

So, that's all with it. My back-end journey continues, keep progressing!

# Skills applied
- HTML
- CSS
- Flex, Media Queries
- Bootstrap grid
- SASS
- Javascript
- Architectural patterns
- PHP
- MySQL
- REST
- Laravel framework
- Eloquent ORM.
- Ability to explore unknown technologies and apply them immediately.
- Composer
- Npm, GULP, Browserify
- Generating auto documentations (JSdoc, PHPdocumentor)
- Basic knowledge of Linux(Ubuntu).
- Ability to install environment for development
- Exporting modules in JS
- Building my own MVC framework on JS.
- IDE PhpStorm.

# NumbersAPI-Parser
Апрель 2019.

# Мои воспоминания
После моего последнего проекта (Number-Facts-API), я решил разработать дополнение к нему. Мне хотелось сохранить тот же дизайн, но использовать иной подход для разработки back-end-а. Прежде всего, я ассоциирую этот проект с принятием мной твёрдого решения становления на путь Laravel разработчика. Мне очень нравится этот фреймворк и с этого момента, я укоренился в своём довольно ответственном решении. Идея для этого проекта пришла ко мне, когда я хотел тестировать Number-Facts-API. Мне были нужны данные, для заполнения БД, но я был очень ленив, чтобы вносить их вручную. Что ж, идея создания приложения, которое доставит мне эти данные (парсер) показалась прекрасной. Без дальнейших церемоний, я начал работать.

# Описание проекта
Перед тем, как я начал работать, я решил подумать, как же я могу увеличить свои знания с этим проектом. И это раздумье принесло свои плоды! Прежде всего, в моём последнем проекте я пообещал, что я найду способ подключать JS без многочиленных <script> тегов и я нашёл его! Я узнал много чего о CommonJS модулях и о коммандах exports, которые ещё не поддерживаются полностью в современных браузерах. Я решил использовать exports. Это привело меня к тому, что мне понадобилось изучить что такое "bundler" и к счастью, я столкнулся с browserify, который прекрасно подошёл к моей GULP сборке. Также, далее, я понял, что мне также необходим babelify(дополнение для browserify) что бы exports-ы работали. Честно говоря, процесс настройки всех этих вещей (babelify, browserify) был достаточно сложен, но в итоге, я получил то, что ожидал: полностью поддерживаемую функциональность export/export default конструкций.
    
Так же, я решил отказаться от использования Lumen в этом проекте (как это было в Number-Facts-API), и я начал исследовать Laravel. Это довольно долгое путешествие для мен, но я уже много чего узнал только из этого проекта.

Кроме того, я наконец-то, заменил редактор Sublime Text на профессиональную IDE (phpStorm). И Я НЕ ЖАЛЕЮ. На самом деле, я очень сожалею, что я не сделал этого раньше, потому что такая перемена сильно упростила процесс программирования. Хотя я потратил определённое время на изучение горячих кнопок, это окупилось далее.

Теперь, мне бы хотелось упомянуть некоторые вещи, которые я делал и осознал в течении разработки.
1. Мне действительно нужно изучить какой-нибудь 1 JS фреймворк, хотя бы основы. Писать MVC с нуля было очень, очень сложно и затратно (это забавно делать в первый раз, но как только подобная необходимость повторяется из раза в раз, это становится не очень приятным). Ментальный долг огромен и мне определённо надо его сократить. Я планирую начать с Vue JS, потому что кажется он наиболее сочетается с Laravel.
2. GULP прекрасен, но ... Webpack намного лучше. Поэтому мне нужно изучить эту утилиту.
3. Архитектура приложений, на самом деле, очень сложная штука. Мне, очевидно, надо больше узнать о рефакторинге и о том, как поднимать чистую, независимую систему.

Что ж, на этом всё. Моё back-end путешествие продолжается, продолжаю и я развиваться!

# Применённые навыки
- HTML
- CSS
- Flex, Media запросы
- Bootstrap grid
- SASS
- Javascript
- Паттерны проектирования
- PHP
- MySQL
- REST
- Laravel фреймворк
- Eloquent ORM.
- Способность изучать незнакомые технологии и мнгновенно их применять.
- Composer
- Npm, GULP, Browserify
- Генерация автодокументаций (JSdoc, PHPdocumentor)
- Базовые знания Linux(Ubuntu).
- Способность разворачивать окружение для разработки.
- Экспортирование модулей в JS
- Создание моего собственного MVC фреймворка на JS.
- IDE PhpStorm.
