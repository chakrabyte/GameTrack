angular.module('app').controller("MainController", function () {
    var vm = this;
    vm.title = 'Game Track';
    vm.searchInput = '';
    vm.games = [
        {
            title: 'Bloodborne',
            year: 2015,
            favorite: true,
            tag: 'action',
            image: 'img/bloodborne.jpg'
           
        },
        {
            title: 'The Witcher 3: Wild Hunt',
            year: 2015,
            favorite: false,
            tag: 'RPG',
            image: 'img/witcher.jpg'
        },
        {
            title: 'Broken Age',
            year: 2014,
            favorite: false,
            tag: 'puzzle',
            image: 'img/brokenage.jpg'
        },
        {
            title: 'Metal Gear Solid V: The Phantom Pain',
            year: 2015,
            favorite: false,
            tag: 'action',
            image: 'img/metalgear.jpg'
        },
        {
            title: 'SOMA',
            year: 2015,
            favorite: false,
            tag: 'horror',
            image: 'img/soma.jpg'
        },
        {
            title: 'Fallout 4',
            year: 2015,
            favorite: true,
            tag: 'RPG',
            image: 'img/fallout.jpg'

        }
    ];
    vm.orders = [
    {
        id: 1,
        title: 'Year Ascending',
        key: 'year',
        reverse: false
    },
    {
        id: 2,
        title: 'Year Descending',
        key: 'year',
        reverse: true
    },
    {
        id: 3,
        title: 'Title Ascending',
        key: 'title',
        reverse: false
    },
    {
        id: 4,
        title: 'Title Descending',
        key: 'title',
        reverse: true
    }
    ];
    vm.order = vm.orders[0];
    vm.new = {};
    vm.addGame = function () {
        vm.games.push(vm.new);
        vm.new = {};
    };
});
