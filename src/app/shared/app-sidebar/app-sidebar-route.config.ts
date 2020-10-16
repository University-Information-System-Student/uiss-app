import { RouteInfo } from './app-sidebar.metadata';

export const ROUTES: RouteInfo[] = [

    {
        path: '',
        title: 'Menu-item 1',
        icon: 'fab fa-adn',
        class: 'has-sub',
        badge: '2',
        badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
        isExternalLink: false,
        submenu: [
            {
                path: '',
                title: 'Menu-item 1.1',
                icon: '',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            },
            {
                path: '',
                title: 'Menu-item 1.2',
                icon: '',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            },
        ]
    },
    {
        path: '',
        title: 'Menu item 2',
        icon: 'fas fa-air-freshener',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
    }
];