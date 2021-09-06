import React, { Component } from 'react'

import HornedBeast from './ HornedBeast'


class Main extends Component {
    render() {
        let animal = [
            {
                name: 'Unicorn Hollow',
                image: 'https://process.filepicker.io/APHE465sSbqvbOIStdwTyz/rotate=deg:exif/resize=fit:crop,height:283,width:472/output=quality:80,compress:true,strip:true,format:jpg/cache=expiry:max/https://cdn.filestackcontent.com/1KfnS1kETJC8bdgBcizm ',
                desc: ' In this one time course, students will learn about unicorn myths and one-horned beast legends from around the world, and how the creature we consider a unicorn morphed into its current form.'
            },
            {
                name: 'Elasmotherium',
                image: 'https://www.ancient-origins.net/sites/default/files/field/image/Siberian-unicorns.jpg',
                desc: 'Elasmotherium, also known as the Giant Rhinoceros or the Giant Siberian Unicorn, is an extinct species of rhino that lived in the Eurasian area in the Late Pliocene and Pleistocene eras. They have been documented from 2.6 million years ago, but the most recent fossils come from around 29,000 years ago.'
            }
        ]
        return (
            <>
                {

                    animal.map(element => {

                    })
                }
            </>
        )
    }
}
export default Main;
