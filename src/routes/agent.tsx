import { createFileRoute } from '@tanstack/react-router';
import { Agent } from '@/components/start-agent/screens';
export const Route = createFileRoute('/agent')({
 head: () => ({ meta: [
 { title: 'Буст — ваш AI-навигатор | Старт-Агент' },
 { name: 'description', content: 'Следующий шаг, задачи и обучение для молодого предпринимателя.' },
 { property: 'og:title', content: 'Буст — ваш AI-навигатор | Старт-Агент' },
 { property: 'og:description', content: 'Следующий шаг, задачи и обучение для молодого предпринимателя.' },
 { property: 'og:type', content: 'website' },
 { name: 'twitter:card', content: 'summary_large_image' },
 ] }),
 component: Agent,
});
