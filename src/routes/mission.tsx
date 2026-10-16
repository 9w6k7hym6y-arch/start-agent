import { createFileRoute } from '@tanstack/react-router';
import { Mission } from '@/components/start-agent/screens';
export const Route = createFileRoute('/mission')({
 head: () => ({ meta: [
 { title: 'Задачи миссии — Старт-Агент' },
 { name: 'description', content: 'Проведите интервью и проверьте реальный спрос на вашу идею.' },
 { property: 'og:title', content: 'Задачи миссии — Старт-Агент' },
 { property: 'og:description', content: 'Проведите интервью и проверьте реальный спрос на вашу идею.' },
 { property: 'og:type', content: 'website' },
 { name: 'twitter:card', content: 'summary_large_image' },
 ] }),
 component: Mission,
});
