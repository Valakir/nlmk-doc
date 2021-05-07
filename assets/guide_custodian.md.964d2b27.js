import{o as i,c as a,a as l}from"./app.ce2cd3d4.js";const t='{"title":"Ответственное хранение","description":"","frontmatter":{},"headers":[{"level":2,"title":"Общие сведения","slug":"общие-сведения"},{"level":2,"title":"Работа с функционалом ответственного хранения","slug":"работа-с-функционаnом-ответственного-хранения"},{"level":2,"title":"Сценарий использования","slug":"сценарий-испоnьзования"},{"level":3,"title":"1. Принятие товара на ответственное хранение","slug":"_1-принятие-товара-на-ответственное-хранение"},{"level":3,"title":"2. Принятие товара на ответственное хранение массовым вводом","slug":"_2-принятие-товара-на-ответственное-хранение-массовым-вводом"},{"level":3,"title":"3. Выкуп заказа с ответственного хранения","slug":"_3-выкуп-заказа-с-ответственного-хранения"},{"level":3,"title":"4. Выкуп заказа с ответственного хранения массовым вводом","slug":"_4-выкуп-заказа-с-ответственного-хранения-массовым-вводом"}],"relativePath":"guide/custodian.md","lastUpdated":1620374117793}',p={},n=l('<h1 id="ответственное-хранение"><a class="header-anchor" href="#ответственное-хранение" aria-hidden="true">#</a> Ответственное хранение</h1><h2 id="общие-сведения"><a class="header-anchor" href="#общие-сведения" aria-hidden="true">#</a> Общие сведения</h2><p>Функционал «Ответственное хранение» предназначен для предоставления клиенту возможности самостоятельно через личный кабинет, посредством ручного или массового ввода:</p><ul><li>принимать на хранение продукцию ОАО «НЛМК»,</li><li>выкупать принятую на хранение продукцию ОАО «НЛМК».</li></ul><h2 id="работа-с-функционаnом-ответственного-хранения"><a class="header-anchor" href="#работа-с-функционаnом-ответственного-хранения" aria-hidden="true">#</a> Работа с функционалом ответственного хранения</h2><p>Работа с функционалом Ответственного хранения доступна только клиентам с ролью Ответственный хранитель.</p><p>Процесс работы с функционалом ответственного хранения включает в себя выполнение следующих процедур:</p><ol><li><p><strong>Принятие товара на ответственное хранение</strong></p><ol><li>Вызов формы оформления акта МХ-1</li><li>Заполнение заголовочной части акта МХ-1</li><li>Заполнение табличной части акта МХ-1</li><li>Сохранение и работа с черновиком акта</li><li>Отправка акта МХ-1 на рассмотрение</li><li>Загрузка подписанного акта МХ-1</li><li>Просмотр страницы «Список актов МХ-1»</li><li>Выгрузка списка актов МХ-1 за период</li></ol></li><li><p><strong>Принятие товара на ответственное хранение массовым вводом</strong></p><ol><li>Вызов формы оформления акта МХ-1</li><li>Выбор файла</li><li>Загрузка файла и создание актов МХ-1</li><li>Работа с журналом загрузки</li><li>Отправка акта МХ-1 на рассмотрение массово</li><li>Просмотр результата обработки</li></ol></li><li><p><strong>Выкуп заказа с ответственного хранения</strong></p><ol><li>Создание заявки на выкуп заказа</li><li>Заполнение заголовочной части акта МХ-3</li><li>Заполнение табличной части акта МХ-3</li><li>Сохранение и работа с черновиком акта</li><li>Отправка акта МХ-3 на рассмотрение</li><li>Загрузка подписанного акта МХ-3</li><li>Просмотр страницы «Список актов МХ-3»</li><li>Выгрузка списка актов МХ-3 за период</li></ol></li><li><p><strong>Выкуп заказа с ответственного хранения массовым вводом</strong></p><ol><li>Вызов формы оформления акта МХ-3</li><li>Выбор файла</li><li>Загрузка файла и создание актов МХ-3</li><li>Работа с журналом загрузки</li><li>Отправка актов МХ-3 в обработку массово</li><li>Просмотр результата обработки</li></ol></li></ol><h2 id="сценарий-испоnьзования"><a class="header-anchor" href="#сценарий-испоnьзования" aria-hidden="true">#</a> Сценарий использования</h2><p>Пункт содержит описание работы с функционалом по всем перечисленным пунктам</p><h3 id="_1-принятие-товара-на-ответственное-хранение"><a class="header-anchor" href="#_1-принятие-товара-на-ответственное-хранение" aria-hidden="true">#</a> <strong>1. Принятие товара на ответственное хранение</strong></h3><p><strong>Предусловия:</strong><br> Данным клиентом создана заявка на производство по договору Хранения (заказы должны находиться в статусе ”Началась отгрузка” и последующие)</p><p><strong>Шаги:</strong></p><ol><li>Перейти к созданию документа МХ-1.</li></ol><p>Переход к форме создания документа МХ-1 возможен:</p><ul><li>с главной страницы (вкладка “Документы МХ-1” → кнопка “Создать новый документ МХ-1”)</li><li>из меню (пункт меню “ОХ” → пункт меню “МХ-1” → пункт меню “Добавить документы МХ-1”)</li><li>со страницы списка документов МХ-1 (кнопка “Создать новый документ МХ-1”)</li></ul><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image2021-3-16_16-39-5.png?version=1&amp;modificationDate=1615901946323&amp;api=v2" alt=""></p><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image2021-3-16_16-43-59.png?version=1&amp;modificationDate=1615902239364&amp;api=v2" alt=""></p><p><br> 2. На появившейся форме заполнения заголовочной части документа МХ-1 заполнить необходимые поля:</p><ul><li><strong>Договор</strong> (список доступных договоров ограничен типов “Договор Хранения”. -</li><li><strong>Грузополучатель</strong> (отображается после заполнения поля “Договор” и ограничен сбытовой организацией, с которой заключен договор). При выборе грузополучателя происходит автоматическое определение склада</li><li><strong>Номер акта МХ-1</strong></li><li><strong>Дата акта МХ-1</strong></li></ul><p>и нажать на кнопку <strong>“Создать черновик”</strong></p><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image2021-3-16_16-46-26.png?version=1&amp;modificationDate=1615902386210&amp;api=v2" alt=""></p><p>Если не все поля заполнены, система показывает предупреждение.</p><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image2021-3-16_16-49-30.png?version=1&amp;modificationDate=1615902571103&amp;api=v2" alt=""></p><p>Перед сохранением документа со статусом «Черновик» проводится проверка на уникальность номера и даты документа МХ-1 в рамках одного договора. Если уникальность не соблюдена, на экран выведется сообщение:</p><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image2021-3-16_12-46-8.png?version=1&amp;modificationDate=1615887968453&amp;api=v2" alt=""></p><p>Результат успешного создания черновика документа МХ-1.</p><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image2021-3-16_16-51-21.png?version=1&amp;modificationDate=1615902681515&amp;api=v2" alt=""></p><p>Доступна область поиска позиций поставок с возможностью фильтрации по номеру т/с и сертификату.</p><ol start="3"><li>Выполнить поиск позиций поставок нажатием на кнопку “<strong>Применить</strong>”.</li></ol><p>Для поиска позиций отгрузки можно использовать буфер обмена (вставка массива данных из Excel и Word с удалением дубликатов) для мультипоиска.</p><p>Нажатие на кнопку “Применить” запускает поиск позиций поставок, которые еще не приняты на хранение.</p><p>Если для данного договора, склада и даты отсутствуют позиции, не принятые на хранение, отобразится сообщение “Нет данных”.</p><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image2021-3-16_13-16-10.png?version=1&amp;modificationDate=1615889770384&amp;api=v2" alt=""></p><p>По умолчанию позиции поставок сгруппированы по номеру т/с и номеру заказа. Для настройки другой группировки есть возможность вынести необходимые столбцы из шапки таблицы/ вернуть необходимые столбцы, по которым выполнена группировка, в шапку таблицы.</p><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_15-25-44.png?version=1&amp;modificationDate=1617193545572&amp;api=v2" alt=""></p><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_15-30-36.png?version=1&amp;modificationDate=1617193836737&amp;api=v2" alt=""></p><p>В таблице найденных позиций поставок имеется возможность постраничного отображения записей с возможностью выбора количества отображаемых записей на странице: 25, 50 или 100 записей.</p><p>На записи позиции поставки, отобразятся поля записи (по умолчанию - дата тр. накладной и станция назначения).</p><ol start="4"><li>Отметить необходимые строчки (проставить галочки в чек-боксе слева) и добавить их в табличную часть нажатием на кнопку “<strong>Добавить</strong>”</li></ol><p>При выборе позиции поставки автоматически выбираются все позиции поставки из одного заказа.</p><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_15-34-36.png?version=1&amp;modificationDate=1617194077507&amp;api=v2" alt=""></p><p>После добавления позиции поставки перемещаются в табличную часть документа МХ-1</p><p>Есть возможность удалить строку из табличной части документа МХ-1 нажатием на иконку “Урна”.</p><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_15-35-56.png?version=1&amp;modificationDate=1617194157355&amp;api=v2" alt=""></p><ol start="5"><li>Выполнить сохранение документа в статусе “Черновик” (нажатием на кнопку “<strong>Сохранить</strong>”) или отправку документа в обработку (нажатием на кнопку “<strong>На рассмотрение</strong>”)</li></ol><p>Также есть возможность удалить документ нажатием на кнопку “<strong>Удалить</strong>” (доступна для документов в статусе “Черновик”)</p><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_15-37-45.png?version=1&amp;modificationDate=1617194265939&amp;api=v2" alt=""></p><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_15-38-37.png?version=1&amp;modificationDate=1617194318547&amp;api=v2" alt=""></p><ol start="6"><li>При отправке документа МХ-1 на рассмотрение осуществляется смена статуса на “Готов синхронизации”. После подтверждения документа во внутренней учетной системе НЛМК осуществляется смена статуса на “<strong>Принято на ОХ</strong>”.</li></ol><p>При отображении статуса “Ошибка синхронизации” или “Ошибка SAP синхронизации” просим вас обратиться в техническую поддержку.</p><ol start="7"><li>Выполнить загрузку подписанной заявки на хранение, сформированной в учетной системе клиента.</li></ol><p>Для этого необходимо кликнуть на текст “<strong>Выберите файл</strong>” и указать файл или переместить документ в область выбора файла. Файл загрузки должен иметь формат JPEG, PNG, PDF или TIF и размер не более 8 МБ.</p><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_15-50-29.png?version=1&amp;modificationDate=1617195030032&amp;api=v2" alt=""></p><p>После того, как файл загружен, его код отображается над областью выбора файла.</p><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_15-53-1.png?version=1&amp;modificationDate=1617195181837&amp;api=v2" alt=""></p><p>При необходимости можно заменить загруженную подписанную заявку. Для этого необходимо повторить действия из п.7. Удаление предзагруженного файла не требуется.</p><ol start="8"><li>Вернуться к списку документов МХ-1 можно по навигационной цепочке (пункт “<strong>Документы</strong>”)</li></ol><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_15-54-57.png?version=1&amp;modificationDate=1617195297894&amp;api=v2" alt=""></p><ol start="9"><li>Список документов МХ-1 поддерживает возможность фильтрации, сортировки значений и группировку по столбцам.</li></ol><p>По каждому документу отражена следующая информация:</p><ul><li>Номер акта</li><li>Дата акта</li><li>Статус</li><li>Договор</li><li>Площадка</li><li>Грузополучатель</li><li>Кол-во по акту (т)</li><li>Склад</li></ul><p>В нижней части списка отображается общий объем по всем документам МХ-1. При настройке фильтрации объем пересчитывается.</p><p>Для формирования отчета “Список актов МХ-1 за период” необходимо::</p><ul><li>нажать на фильтр в столбце “Дата акта”,</li><li>выбрать необходимый временной диапазон,</li><li>нажать кнопку “ОК”,</li><li>для выгрузки списка в формате .xlsx нажать на иконку</li></ul><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_16-2-25.png?version=1&amp;modificationDate=1617195746415&amp;api=v2" alt=""></p><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_16-4-31.png?version=1&amp;modificationDate=1617195872710&amp;api=v2" alt=""></p><p>Для просмотра документа необходимо нажать на наименование документа МХ-1, после чего откроется форма существующего документа МХ-1.</p><p>Редактирование доступно только для документов МХ-1 в статусе “Черновик”.</p><h3 id="_2-принятие-товара-на-ответственное-хранение-массовым-вводом"><a class="header-anchor" href="#_2-принятие-товара-на-ответственное-хранение-массовым-вводом" aria-hidden="true">#</a> <strong>2. Принятие товара на ответственное хранение массовым вводом</strong></h3><p><strong>Предусловия:</strong><br> Данным клиентом создана заявка на производство по договору Хранения (заказы должны находиться в статусе ”Началась отгрузка” и последующие)</p><p><strong>Шаги:</strong></p><ol><li>Перейти к созданию документа МХ-1 массовым вводом</li></ol><p>Переход к форме создания документа МХ-1 массовым вводом возможен:</p><ul><li>с главной страницы (вкладка “Документы МХ-1” → кнопка “Импортировать документ из файла”)</li><li>из меню (пункт меню “ОХ” → пункт меню “МХ-1” → пункт меню “Массовый импорт МХ-1”)</li><li>со страницы списка документов МХ-1 (кнопка “Импортировать документ из файла”)</li></ul><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_16-7-19.png?version=1&amp;modificationDate=1617196040364&amp;api=v2" alt=""></p><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_16-8-7.png?version=1&amp;modificationDate=1617196088522&amp;api=v2" alt=""></p><ol start="2"><li>На появившейся странице импорта выбрать сбытовую организацию из выпадающего списка</li></ol><p>При выборе сбытовой организации отобразится ссылка на скачивание шаблона файла загрузки</p><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_16-10-51.png?version=1&amp;modificationDate=1617196252661&amp;api=v2" alt=""></p><p>Входной файл для ПАО должен содержать следующую информацию:</p><ul><li>Вагон</li><li>Сертификат/Позиция сертификата</li><li>Номер МХ-1</li><li>Дата МХ-1</li></ul><p>Входной файл для Сортовых площадок должен содержать следующую информацию:</p><ul><li>Вагон</li><li>Номер МХ-1</li><li>Дата МХ-1</li><li>Договор</li></ul><p>Первая строка заголовочная, то есть она должна содержать названия столбцов.</p><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image-20200311-162820.png?version=1&amp;modificationDate=1583922503406&amp;api=v2" alt=""></p><p>3.Выполнить загрузку файла, кликнув на текст “<strong>Выберите файл</strong>” и указав файл или переместив документ в область выбора файла. Файл загрузки должен иметь формат .xlsx или .csv <img src="https://confluence.nlmk.com/download/attachments/24774890/image-20200311-152759.png?version=1&amp;modificationDate=1583918882217&amp;api=v2" alt=""></p><p>Далее нажать кнопку “<strong>Загрузить</strong>”.</p><p>При загрузке файла выполняется проверка корректности заполнения данных. Если ошибки будут найдены, то на экран выведутся сообщения по каждой строке и каждому полю, в которых обнаружены ошибки. Загрузка файла останавливается.</p><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image-20200311-153239.png?version=1&amp;modificationDate=1583919162972&amp;api=v2" alt=""></p><ol start="4"><li>При успешной загрузке файла будет доступен журнал загрузки. В журнале отображаются созданные акты или описание ошибок в акте.</li></ol><p>По клику на номера успешно созданных актов есть возможность перейти к просмотру документа.</p><p>Для созданных актов МХ-1 отображается активный чек-бокс. Акты, отмеченные галкой в чек-боксе, можно массово отправить в обработку.</p><p>Для отправки актов на рассмотрение необходимо нажать кнопку «<strong>На рассмотрение</strong>».</p><p>При успешном результате обработки на стороне внутренней учетной системы НЛМК отобразится статус обработки “Принято на ОХ”.</p><p>При отображении статуса “Ошибка при отправке” просим вас обратиться в техническую поддержку.</p><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image-20200311-161216.png?version=1&amp;modificationDate=1583921540923&amp;api=v2" alt=""></p><h3 id="_3-выкуп-заказа-с-ответственного-хранения"><a class="header-anchor" href="#_3-выкуп-заказа-с-ответственного-хранения" aria-hidden="true">#</a> <strong>3. Выкуп заказа с ответственного хранения</strong></h3><p><strong>Предусловия:</strong><br> У данного клиента имеется подтвержденная заявка по принятию на ответственное хранение продукции НЛМК.</p><p><strong>Шаги:</strong></p><ol><li><p>Перейти к созданию документа МХ-3.</p></li><li><p>Переход к форме создания документа МХ-3 возможен:</p><ol><li>с главной страницы (вкладка “Документы МХ-3” → кнопка “Создать новый документ МХ-3”)</li><li>из меню (пункт меню “ОХ” → пункт меню “МХ-3” → пункт меню “Добавить документы МХ-3”)</li><li>со страницы списка документов МХ-3 (кнопка “Создать новый документ МХ-3”)</li></ol></li></ol><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_16-21-18.png?version=1&amp;modificationDate=1617196879596&amp;api=v2" alt=""></p><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_16-22-22.png?version=1&amp;modificationDate=1617196943324&amp;api=v2" alt=""></p><ol start="2"><li>На появившейся форме заполнения заголовочной части документа МХ-3 заполнить необходимые поля:</li></ol><ul><li><strong>Договор</strong> (список доступных договоров ограничен типов “Договор Хранения”.</li><li><strong>Грузополучатель</strong> (отображается после заполнения поля “Договор” и ограничен сбытовой организацией, с которой заключен договор). При выборе грузополучателя происходит автоматическое определение склада.</li><li><strong>Номер акта МХ-3</strong></li><li><strong>Дата акта МХ-3</strong></li></ul><p>и нажать на кнопку <strong>“Создать черновик”</strong></p><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_16-25-18.png?version=1&amp;modificationDate=1617197119190&amp;api=v2" alt=""></p><p>Если не все поля заполнены, система показывает предупреждение.</p><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_16-26-16.png?version=1&amp;modificationDate=1617197177147&amp;api=v2" alt=""></p><p>Перед сохранением документа со статусом «Черновик» проводится проверка на уникальность номера и даты документа МХ-3 в рамках одного договора. Если уникальность не соблюдена, на экран выведется сообщение:</p><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_16-30-28.png?version=1&amp;modificationDate=1617197429582&amp;api=v2" alt=""></p><p>Результат успешного создания черновика документа МХ-3.</p><p>Доступна область поиска позиций поставок с возможностью фильтрации по номеру т/с, материалу и сертификату.</p><ol start="3"><li>Выполнить поиск позиций поставок нажатием на кнопку “<strong>Применить</strong>” для поиска всех остатков, хранящихся на указанном складе на выбранную дату.</li></ol><p>Для поиска позиций отгрузки можно использовать буфер обмена (вставка массива данных из Excel и Word с удалением дубликатов) для мультипоиска.</p><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_16-31-47.png?version=1&amp;modificationDate=1617197508162&amp;api=v2" alt=""></p><p>Для поиска лучше использовать фильтр «Сертификат/позиция» (пачка), а остальные поля фильтра использовать как дополнительные в случае дублирования данных Сертификат/позиция.</p><p>Нажатие на кнопку “Применить” запускает поиск позиций поставок, которые приняты на хранение, но не выкуплены.</p><p>Если для данного договора, склада и даты отсутствуют позиции, принятые на хранение и не выкупленные, отобразится сообщение “Нет данных”.</p><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_16-33-38.png?version=1&amp;modificationDate=1617197619426&amp;api=v2" alt=""></p><p>Есть возможность настроить группировку по столбцам. Для этого необходимо вынести столбцы из шапки таблицы.</p><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_16-41-40.png?version=1&amp;modificationDate=1617198101464&amp;api=v2" alt=""></p><p>В таблице найденных позиций поставок имеется возможность постраничного отображения записей с возможностью выбора количества отображаемых записей на странице: 25, 50 или 100 записей.</p><p>На записи позиции поставки, отобразятся поля записи (по умолчанию - № тр. накладной и название материала).</p><ol start="4"><li>Отметить необходимые строчки (проставить галочки в чек-боксе слева) и добавить их в табличную часть нажатием на кнопку “<strong>Добавить</strong>”</li></ol><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_16-44-18.png?version=1&amp;modificationDate=1617198259018&amp;api=v2" alt=""></p><p>После добавления позиции поставки перемещаются в табличную часть документа МХ-3.</p><p>Есть возможность удалить строку из табличной части документа МХ-3 нажатием на иконку “Урна”.</p><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_16-48-5.png?version=1&amp;modificationDate=1617198486592&amp;api=v2" alt=""></p><p>Для позиций поставок в документах МХ-3 по договорам с Сортовыми площадками предусмотрена возможность редактирования тоннажа при добавлении в табличную часть</p><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_16-49-19.png?version=1&amp;modificationDate=1617198560920&amp;api=v2" alt=""></p><ol start="5"><li>Выполнить сохранение документа в статусе “Черновик” (нажатием на кнопку “<strong>Сохранить</strong>”) или отправку документа в обработку (нажатием на кнопку “<strong>На рассмотрение</strong>” внизу страницы)</li></ol><p>Также есть возможность удалить документ нажатием на кнопку “<strong>Удалить</strong>” (доступна для документов в статусе “Черновик”)</p><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_16-50-20.png?version=1&amp;modificationDate=1617198621730&amp;api=v2" alt=""></p><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_16-50-46.png?version=1&amp;modificationDate=1617198647613&amp;api=v2" alt=""></p><ol start="6"><li>При отправке документа МХ-3 на рассмотрение осуществляется смена статуса на “Готов к синхронизации”. Затем после подтверждения документа во внутренней учетной системе НЛМК отображается статус “<strong>Подтверждено в SAP</strong>”.</li></ol><p>При отображении статуса “Ошибка синхронизации” или “Ошибка SAP синхронизации” просим вас обратиться в техническую поддержку.</p><ol start="7"><li>Выполнить загрузку подписанной заявки на выкуп, сформированной в учетной системе клиента.</li></ol><p>Для этого необходимо кликнуть на текст “<strong>Выберите файл</strong>” и указать файл или переместить документ в область выбора файла. Файл загрузки должен иметь формат JPEG, PNG, PDF или TIF и размер не более 8 МБ.</p><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image-20200311-223457.png?version=1&amp;modificationDate=1583944499849&amp;api=v2" alt=""></p><p>После того, как файл загружен, его код отображается над областью выбора файла.</p><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image-20200311-223531.png?version=1&amp;modificationDate=1583944533943&amp;api=v2" alt=""></p><p>При необходимости можно заменить загруженную подписанную заявку. Для этого необходимо повторить действия из п.7. Удаление предзагруженного файла не требуется.</p><ol start="8"><li>Вернуться к списку документов МХ-3 можно по навигационной цепочке (пункт “<strong>Документы</strong>”)</li></ol><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image-20200311-223633.png?version=1&amp;modificationDate=1583944596147&amp;api=v2" alt=""></p><ol start="9"><li>Список документов МХ-3 поддерживает возможность фильтрации, сортировки значений и группировку по столбцам.</li></ol><p>По каждому документу отражена следующая информация:</p><ul><li>Номер акта</li><li>Дата акта</li><li>Статус</li><li>Договор</li><li>Грузополучатель</li><li>Кол-во по акту (т)</li><li>Склад</li></ul><p>В нижней части списка отображается общий объем по всем документам МХ-3. При настройке фильтрации объем пересчитывается.</p><p>Для формирования отчета “Список актов МХ-3 за период” необходимо:</p><ul><li>нажать на фильтр в столбце “Дата акта”,</li><li>выбрать необходимый временной диапазон,</li><li>нажать кнопку “ОК”,</li><li>для выгрузки списка в формате .xlsx нажать на иконку</li></ul><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_17-8-22.png?version=1&amp;modificationDate=1617199703189&amp;api=v2" alt=""></p><p>Для просмотра документа необходимо нажать на наименование документа МХ-3, после чего откроется форма существующего документа МХ-3.</p><p>Редактирование возможно только для документов МХ-3, находящихся в статусе “Черновик”.</p><h3 id="_4-выкуп-заказа-с-ответственного-хранения-массовым-вводом"><a class="header-anchor" href="#_4-выкуп-заказа-с-ответственного-хранения-массовым-вводом" aria-hidden="true">#</a> <strong>4. Выкуп заказа с ответственного хранения массовым вводом</strong></h3><p><strong>Предусловия:</strong><br> У данного клиента имеется подтвержденная заявка по принятию на ответственное хранение продукции НЛМК.</p><p><strong>Шаги:</strong></p><ol><li>Перейти к созданию документа МХ-3 массовым вводом</li></ol><p>Переход к форме создания документа МХ-3 массовым вводом возможен:</p><ul><li>с главной страницы (вкладка “Документы МХ-3” → кнопка “Импортировать документ из файла”)</li><li>из меню (пункт меню “ОХ” → пункт меню “МХ-3” → пункт меню “Массовый импорт МХ-3”)</li><li>со страницы списка документов МХ-3 (кнопка “Импортировать документ из файла”)</li></ul><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_17-10-21.png?version=1&amp;modificationDate=1617199822549&amp;api=v2" alt=""></p><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_17-11-43.png?version=1&amp;modificationDate=1617199904977&amp;api=v2" alt=""></p><ol start="2"><li>На появившейся странице импорта выбрать сбытовую организацию из выпадающего списка.</li></ol><p>При выборе сбытовой организации отобразится ссылка на скачивание шаблона файла загрузки.</p><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_17-12-33.png?version=1&amp;modificationDate=1617199954722&amp;api=v2" alt=""></p><p>Входной файл для ПАО должен содержать следующую информацию:</p><ul><li>Вагон</li><li>Сертификат/Позиция сертификата</li><li>Номер МХ-3</li><li>Дата МХ-3</li><li>Договор</li></ul><p>Входной файл для Сортовых площадок должен содержать следующую информацию:</p><ul><li>Вагон</li><li>Код ОЗМ</li><li>Объем</li><li>Номер МХ-3</li><li>Дата МХ-3</li><li>Договор</li><li>Склад</li></ul><p>Первая строка заголовочная, то есть она должна содержать названия столбцов.</p><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image-20200312-125721.png?version=1&amp;modificationDate=1583996245270&amp;api=v2" alt=""></p><p>3.Выполнить загрузку файла, кликнув на текст “<strong>Выберите файл</strong>” и указав файл или переместив документ в область выбора файла. Файл загрузки должен иметь формат .xlsx или .csv</p><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image-20200312-130319.png?version=1&amp;modificationDate=1583996601433&amp;api=v2" alt=""></p><p>Далее нажать кнопку “<strong>Загрузить</strong>”.</p><p>При загрузке файла выполняется проверка корректности заполнения данных. Если ошибки будут найдены, то на экран выведутся сообщения по каждой строке и каждому полю, в которых обнаружены ошибки. Загрузка файла останавливается.<img src="https://confluence.nlmk.com/download/attachments/24774890/image-20200312-131659.png?version=1&amp;modificationDate=1583997423430&amp;api=v2" alt=""></p><ol start="4"><li>При успешной загрузке файла будет доступен журнал загрузки. В журнале отображаются созданные акты или описание ошибок в акте.</li></ol><p>По клику на номера успешно созданных актов есть возможность перейти к просмотру документа.</p><p>Для созданных актов МХ-3 отображается активный чек-бокс. Акты, отмеченные галкой в чек-боксе, можно массово отправить в обработку.</p><p>Для отправки актов на рассмотрение, необходимо нажать кнопку «<strong>На рассмотрение</strong>».</p><p>При успешном результате обработки на стороне внутренней учетной системы НЛМК отобразится статус обработки “Успешно”.</p><p>При отображении статуса “Ошибка при отправке” просим вас обратиться в техническую поддержку.</p><p><img src="https://confluence.nlmk.com/download/attachments/24774890/image-20200312-130545.png?version=1&amp;modificationDate=1583996747984&amp;api=v2" alt=""></p>',182);p.render=function(l,t,p,o,m,e){return i(),a("div",null,[n])};export default p;export{t as __pageData};
