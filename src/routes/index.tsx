import { createFileRoute } from '@tanstack/react-router';
import { Landing } from '@/components/start-agent/screens';
export const Route = createFileRoute('/')({
 head: () => ({ meta: [
 { title: 'Старт-Агент — AI навигатор для старта бизнеса' },
 { name: 'description', content: 'Проверьте идею и пройдите путь до первого платежа вместе с Бустом.' },
 { property: 'og:title', content: 'Старт-Агент — AI навигатор для старта бизнеса' },
 { property: 'og:description', content: 'Проверьте идею и пройдите путь до первого платежа вместе с Бустом.' },
 { property: 'og:type', content: 'website' },
 { name: 'twitter:card', content: 'summary_large_image' },
 ] }),
 component: Landing,
});
