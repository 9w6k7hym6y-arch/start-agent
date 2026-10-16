import { createFileRoute } from '@tanstack/react-router';
import { Onboarding } from '@/components/start-agent/screens';
export const Route = createFileRoute('/onboarding')({
 head: () => ({ meta: [
 { title: 'Ваша идея — Старт-Агент' },
 { name: 'description', content: 'Расскажите Бусту, какой бизнес вы хотите запустить.' },
 { property: 'og:title', content: 'Ваша идея — Старт-Агент' },
 { property: 'og:description', content: 'Расскажите Бусту, какой бизнес вы хотите запустить.' },
 { property: 'og:type', content: 'website' },
 { name: 'twitter:card', content: 'summary_large_image' },
 ] }),
 component: Onboarding,
});
