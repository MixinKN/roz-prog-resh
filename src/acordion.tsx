import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from "@mui/material/Box";

export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <Box id="servises" sx={{marginTop:"60px",marginBottom:"120px"}}>
            <Typography component="h2" variant="h2" sx={{marginBottom:"20px"}}>Услуги</Typography>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
                        UX/UI
                    </Typography>
                    <Typography component="span" sx={{ color: 'text.secondary' }}>
                        Дизайн мобильных приложений/АИС
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Задача продуманного дизайна – учитывать задачи пользователей и их опыт, делая продукт привлекательным, понятным и удобным. Стадии работы включают разработку дизайна мобильного приложения, автоматизированной информационной системы, редизайн приложений/сайтов и создание диджитал-продуктов. Основные этапы: разработка сервиса, анализ, структура и прототипирование, визуальная концепция, дизайн экранов, дизайн-система, передача макетов разработчикам и авторский контроль.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
                        Разработка сайта
                    </Typography>
                    <Typography component="span" sx={{ color: 'text.secondary' }}>
                        Разработка сайта под ключ
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Создание веб-сайта включает следующие этапы: сбор требований, аналитика, разработка прототипа, подготовка технического задания, создание визуальной концепции, отрисовка страниц, передача макетов разработчикам и разработка и верстка.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
                        Frontend
                    </Typography>
                    <Typography component="span" sx={{ color: 'text.secondary' }}>
                        React/Next Vue/Nuxt
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Создание функционального интерфейса для сайтов и приложений. Верстка, оптимизация, тестирование, создание сложных анимаций на HTML и CSS. Стадии работы: анализ требований, разработка интерфейса, интеграция с бэкендом, тестирование, деплой и поддержка, документация.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
                        Backend
                    </Typography>
                    <Typography component="span" sx={{ color: 'text.secondary' }}>
                        Nest.js/Golang/C#
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Ключевые задачи включают интеграцию с CRM, API, эквайрингом, аналитикой, поддержку и развитие сайта, реализацию бизнес-логики, организацию работы БД, настройку серверов, разработку и документацию API, интеграцию внешних сервисов, резервное копирование данных. Стадии работы: сбор и анализ требований, проектирование архитектуры, настройка окружения, разработка модулей, интеграция сторонних сервисов, тестирование и отладка, документация, деплой и запуск, поддержка и масштабирование.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
                        Mobile Dev
                    </Typography>
                    <Typography component="span" sx={{ color: 'text.secondary' }}>
                        React Native
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Предлагаем полный цикл разработки: от анализа требований до публикации и поддержки готового продукта. Специалисты занимаются проектированием интерфейсов, интеграцией с бэкендом, оптимизацией производительности, обеспечением безопасности, тестированием и отладкой приложений.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
                        Аудит
                    </Typography>
                    <Typography component="span" sx={{ color: 'text.secondary' }}>
                        SEO/Программного кода/Оптимизация сайта
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Проводим SEO-аудит: анализируем позиции в поиске, мета-теги, ключи и ссылки, контент. Оцениваем код, ошибки, безопасность, производительность. Улучшаем скорость загрузки, оптимизируем изображения, стили, скрипты, базы данных и сервер. Предоставляем отчет с рекомендациями. Консультируем и помогаем внедрить улучшения.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}