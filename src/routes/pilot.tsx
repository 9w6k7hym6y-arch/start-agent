import { createFileRoute } from '@tanstack/react-router';
import { Pilot } from '@/components/start-agent/screens';
export const Route = createFileRoute('/pilot')({
 head: () => ({ meta: [
 { title: 'Предложение пилота — Старт-Агент' },
 { name: 'description', content: 'Соберите тестовый оффер для первого потока онлайн-школы.' },
 { property: 'og:title', content: 'Предложение пилота — Старт-Агент' },
 { property: 'og:description', content: 'Соберите тестовый оффер для первого потока онлайн-школы.' },
 { property: 'og:type', content: 'website' },
 { name: 'twitter:card', content: 'summary_large_image' },
 ] }),
 component: Pilot,
});
