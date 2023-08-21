import React from 'react';
import { faCalendar, faClipboardList, faComments, faDollar } from '@fortawesome/free-solid-svg-icons';
import { Card } from './Card';

/*cards datalist*/
export function CardList() {
    const cardData = [
        {
            title: "EARNINGS (MONTHLY)",
            price: "$40,000",
            colors: "primary",
            icon: faCalendar
        },
        {
            title: "EARNINGS (ANNUAL)",
            price: "$40,000",
            colors: "success",
            icon: faDollar
        },
        {
            title: "TASKS",
            price: "50%",
            colors: "info",
            icon: faClipboardList,
            isprogress: true
        },
        {
            title: "PENDING REQUESTS",
            price: "18",
            colors: "warning",
            icon: faComments
        }
    ];
    return (
        <div className='row'>
            {cardData.map((dt) => <Card data={dt} />)}
        </div>
    );
}