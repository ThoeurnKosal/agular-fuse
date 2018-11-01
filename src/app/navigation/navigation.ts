import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'sample',
                title    : 'Sample',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'email',
                url      : '/sample',
                badge    : {
                    title    : '25',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            },
            {
                id       : 'e-commerce',
                title    : 'E-Commerce',
                translate: 'NAV.ECOMMERCE.TITLE',
                type     : 'collapsable',
                icon     : 'shopping_cart',
                children : [
                    {
                        id         : 'products',
                        title      : 'Products',
                        translate  : 'NAV.ECOMMERCE.PRODUCT',
                        type       : 'item',
                        url        : 'ecommerce/products',
                        exactMatch : true,
                    },
                    {
                        id        : 'productDetail',
                        title     : 'Product Detail',
                        translate : 'NAV.ECOMMERCE.PRODUCT_DETAIL',
                        type      : 'item',
                        url       : 'ecommerce/products/1/print-dressed',
                        exactMatch: true
                    },
                    {
                        id        : 'orders',
                        title     : 'Orders',
                        translate : 'NAV.ECOMMERCE.ORDER',
                        type      : 'item',
                        url       : 'ecommerce/orders',
                        exactMatch: true
                    },
                    {
                        id        : 'orderDetail',
                        title     : 'Order Detail',
                        translate : "NAV.ECOMMERCE.ORDER_DETAIL",
                        type      : 'item',
                        url       : 'ecommerce/orders/1',
                        exactMatch: true
                    }
                ]
            },
            
        ]
    }
];
