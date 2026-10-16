import { createFileRoute } from '@tanstack/react-router';
import { Hypotheses } from '@/components/start-agent/screens';
export const Route = createFileRoute('/hypotheses')({
 head: () => ({ meta: [
 { title: 'Карта гипотез — Старт-Агент' },
 { name: 'description', content: 'Факты, гипотезы и следующий эксперимент для онлайн-школы.' },
 { property: 'og:title', content: 'Карта гипотез — Старт-Агент' },
 { property: 'og:description', content: 'Факты, гипотезы и следующий эксперимент для онлайн-школы.' },
 { property: 'og:type', content: 'website' },
 { name: 'twitter:card', content: 'summary_large_image' },
 ] }),
 component: Hypotheses,
});
