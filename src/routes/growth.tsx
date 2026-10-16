import { createFileRoute } from '@tanstack/react-router';
import { Growth } from '@/components/start-agent/screens';
export const Route = createFileRoute('/growth')({
 head: () => ({ meta: [
 { title: 'От пилота к бизнесу — Старт-Агент' },
 { name: 'description', content: 'Маршрут от первого потока до оформления бизнеса.' },
 { property: 'og:title', content: 'От пилота к бизнесу — Старт-Агент' },
 { property: 'og:description', content: 'Маршрут от первого потока до оформления бизнеса.' },
 { property: 'og:type', content: 'website' },
 { name: 'twitter:card', content: 'summary_large_image' },
 ] }),
 component: Growth,
});
