import { createFileRoute } from '@tanstack/react-router';
import { Account } from '@/components/start-agent/screens';
export const Route = createFileRoute('/account')({
 head: () => ({ meta: [
 { title: 'Ваш счёт — Старт-Агент' },
 { name: 'description', content: 'Демонстрационный банковский счёт, платежи и AI-прогноз.' },
 { property: 'og:title', content: 'Ваш счёт — Старт-Агент' },
 { property: 'og:description', content: 'Демонстрационный банковский счёт, платежи и AI-прогноз.' },
 { property: 'og:type', content: 'website' },
 { name: 'twitter:card', content: 'summary_large_image' },
 ] }),
 component: Account,
});
