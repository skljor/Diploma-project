"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employesSearchQs = exports.employes = void 0;
const employes = [
    {
        id: '1',
        fullname: 'Калетина Галина Михайловна',
        jobTitle: 'Начальник отдела',
        contacts: {
            phone: '+7 (3532) 77-00-54',
            mail: 'gmk@mail.orb.ru'
        },
        secondname: 'Калетина',
        structureCode: '401'
    },
    {
        id: '2',
        fullname: 'Котова Татьяна Михайловна',
        jobTitle: 'Ведущий специалист',
        contacts: {
            phone: '+7 (3532) 77-00-54',
            mail: 'tmk@mail.orb.ru'
        },
        secondname: 'Котова',
        structureCode: '401'
    },
    {
        id: '3',
        fullname: 'Мятивина Юлия Дмитриевна',
        jobTitle: 'Начальник отдела',
        contacts: {
            phone: '+7 (3532) 77-48-60',
            mail: 'udm@mail.orb.ru'
        },
        secondname: 'Мятивина',
        structureCode: '402'
    },
    {
        id: '4',
        fullname: 'Фалеева Елена Дмитриевна',
        jobTitle: 'Консультант',
        contacts: {
            phone: '+7 (3532) 77-48-60',
            mail: 'edfa@mail.orb.ru'
        },
        secondname: 'Фалеева',
        structureCode: '402'
    },
    {
        id: '5',
        fullname: 'Мизюгина Анастасия Олеговна',
        jobTitle: 'Ведущий специалист',
        contacts: {
            phone: '+7 (3532) 77-48-60',
            mail: 'aov@mail.orb.ru'
        },
        secondname: 'Мизюгина',
        structureCode: '402'
    },
    {
        id: '6',
        fullname: 'Светлейшая Наталья Михайловна',
        jobTitle: 'Начальник отдела',
        contacts: {
            phone: '+7 (3532) 77-22-53',
            mail: 'aov@mail.orb.ru'
        },
        secondname: 'Светлейшая',
        structureCode: '403'
    },
    {
        id: '7',
        fullname: 'Дюба Евгения Николаевна',
        jobTitle: 'Главный специалист',
        contacts: {
            phone: '+7 (3532) 77-22-53',
            mail: 'endu@mail.orb.ru'
        },
        secondname: 'Дюба',
        structureCode: '403'
    },
    {
        id: '8',
        fullname: 'Соловьева Людмила Владимировна',
        jobTitle: 'Главный специалист',
        contacts: {
            phone: '+7 (3532) 77-22-53',
            mail: 'lvs@mail.orb.ru'
        },
        secondname: 'Соловьева',
        structureCode: '403'
    },
    {
        id: '9',
        fullname: 'Мурзаханова Юлия Михайловна',
        jobTitle: 'Ведущий специалист',
        contacts: {
            phone: '+7 (3532) 77-22-53',
            mail: 'endu@mail.orb.ru'
        },
        secondname: 'Мурзаханова',
        structureCode: '403'
    },
    {
        id: '10',
        fullname: 'Берникова Лариса Геннадиевна',
        jobTitle: 'Начальник отдела',
        contacts: {
            phone: '+7 (3532) 77-22-87',
            mail: 'lgb@mail.orb.ru'
        },
        secondname: 'Берникова',
        structureCode: '440'
    },
    {
        id: '11',
        fullname: 'Гулак Ирина Александровна',
        jobTitle: 'Заместитель начальника отдела',
        contacts: {
            phone: '+7 (3532) 77-22-87',
            mail: 'lagu@mail.orb.ru'
        },
        secondname: 'Гулак',
        structureCode: '440'
    },
    {
        id: '12',
        fullname: 'Вольникова Ольга Андреевна',
        jobTitle: 'Ведущий специалист',
        contacts: {
            phone: '+7 (3532) 77-47-78',
            mail: 'oavo@mail.orb.ru'
        },
        secondname: 'Вольникова',
        structureCode: '440'
    },
];
exports.employes = employes;
const employesSearchQs = ["secondname", "structureCode", "jobTitle"];
exports.employesSearchQs = employesSearchQs;
