import React, { Component } from 'react'
import HornedBeast from './HornedBeast '

class Main extends Component {
    render() {
        let animal = [{
            Imgtitle: 'unicorn',
            src: 'https://process.filepicker.io/APHE465sSbqvbOIStdwTyz/rotate=deg:exif/resize=fit:crop,height:283,width:472/output=quality:80,compress:true,strip:true,format:jpg/cache=expiry:max/https://cdn.filestackcontent.com/1KfnS1kETJC8bdgBcizm',
            description: 'The unicorn is a legendary creature that has been described since antiquity as a beast with a single large, pointed, spiraling horn projecting from its forehead.',
        },
        {
            Imgtitle: 'Rhinos',
            src: 'https://files.worldwildlife.org/wwfcmsprod/images/Black_Rhino_WW1106963/hero_full/4xzhm81mi7_Black_Rhino_WW1106963.jpg',
            des: 'Rhinos once roamed many places throughout Europe, Asia, and Africa and were known to early Europeans who depicted them in cave paintings. At the beginning of the 20th century, 500,000 rhinos roamed Africa and Asia. By 1970, rhino numbers dropped to 70,000, and today, around 27,000 rhinos remain in the wild.',
        }
        ]
        return (
            <>
           {
               animal.map(item=>{
                return < HornedBeast title={item.Imgtitle} img={item.src} description={item.desc}/>
               })
           }
            </>
        )
    }
}

export default Main
