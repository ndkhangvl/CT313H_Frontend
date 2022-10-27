import { createWebHistory, createRouter } from 'vue-router';
import ContactBook from '@/views/ContactBook.vue';
const routes = [
    {
        path: '/',
        name: 'contactbook',
        component: ContactBook,
    },
    {
        path: '/:id',
        name: 'contact.edit',
        component: () => import('@/views/ContactEdit.vue'),
        props: (route) => ({ contactId: parseInt(route.params.id)})
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;