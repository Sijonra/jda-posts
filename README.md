### DECOMPOSITION

## 1. Preparing project styles

      1.1[JDA-0101] create scss mixins/variables/normalize/fonts
      1.2[JDA-0102] adding components from jda-ui-kit


<!-- 1. Создание компонента "Сетка постов"
   Создать компонент, который будет отображать посты на экране.
2. Использование API для получения данных
   Использовать API https://jsonplaceholder.typicode.com/ для получения данных о постах.
3. Создание компонентов для вёрстки
   Создать следующие компоненты:
   Компонент выпадающего списка авторов.
   Компонент текстового поля для ввода слов, разделенных запятыми.
   Компонент галочки для выбора завершенных статей.
4. Создание контекста данных
   Создать контекст данных, который будет хранить информацию о постах и состоянии фильтрации. Эти данные будут храниться на верхнем уровне приложения и передаваться через useContext.
5. Реализация фильтра
   Реализовать фильтр согласно следующим требованиям:
   Создать выпадающий список авторов.
   Создать текстовое поле для ввода слов, разделенных запятыми.
   Создать галочку для выбора завершенных статей.
   При изменении состояния выпадающего списка авторов или галочки, выполнять поиск сразу.
   При вводе в текстовое поле начинать поиск с задержкой в 500 миллисекунд (используя debounce).
6. Реализация алгоритма поиска
   Реализовать алгоритм поиска согласно следующим правилам:
   Если указан автор, ожидать точное соответствие по полному имени автора.
   Если галочка "завершенные статьи" активирована, выводить только завершенные статьи.
   Разделить строку, введенную в текстовое поле, на слова по пробелам и производить поиск данных слов как в заголовке, так и в теле поста.
   Если найдено хотя бы одно слово, добавить соответствующую запись в результаты поиска.
7. Обработка отсутствия результатов
   В случае отсутствия результатов поиска, выводить сообщение "По вашему запросу ничего не найдено". -->
