var config = {
    style: 'mapbox://styles/dmcd06/cmacuiy9u00r001s01ukfhn40',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiZG1jZDA2IiwiYSI6ImNtOTdzZHU1eDBhb2Uya3B0MGllODl0c2wifQ.fmTXvvPvd31uzDwDA0qNRg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'Purple'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Exploring Agency of Southern Women: A Digital Essay',
    subtitle: 'Spatial Journeys across the South',
    byline: 'Damien McDonald',
    footer: 'Source: Walker, Alice. The Color Purple. Harcourt, 1982.,Faulkner, William. As I Lay Dying. Vintage International, 1990.,Hurston, Zora Neale. Their Eyes Were Watching God. Harper Perennial Modern Classics, 2006. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'opening',
            alignment: 'centered',
            hidden: false,
            title: 'Women Agency in the South',
            image: 'assets/Queens.jpg',
            description: 'Describe the themese',
            location: {
                center: [-90.3150946, 38.6605671],
                zoom: 4,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter-intro',
            alignment: 'Centered',
            hidden: false,
            title: 'The Color Purple',
            image: './assets/color_purple_cover.jpg',
            description: 'The Color Purple is a beautiful novel telling the story of Celie and her life along with her sister Nettie through Letters. This books touches on themes of queerness, womanism, patriarchy, and family as Celie goes through several life altering challenges and comes out the otherside with the help of her friend Shug Avery.',
            location: {
                center: [-83.5573651, 32.5573651], 
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-Movement',
            alignment: 'left',
            hidden: false,
            title: 'Movement of Novel',
            image: 'assets/Nettie in Africa.jpg',
            description: 'There is an unexpected amount of movement in this novel. As seen here Nettie travels from Gerogia to Africa, and from there stops in London for a spell before returning to Georgia. Shug Avery also makes frequent trips from Memphis, Tennessee to Macon, Georgia, as her career has given her the ability to travel often on tour. Lastly, Celie moves from west Georia to Macon and travels to prison, Sophias house and her original home which she later owns in the book.',
            location: {
                center: [-10.380621629,6.246110209], 
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-three',
            alignment: 'fully',
            hidden: false,
            title: 'End',
            image: './assets/color_purple_field.jpg',
            description: 'Close of the novel.',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 3,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-AILD',
            alignment: 'centered',
            hidden: false,
            title: 'As I Lay Dying',
            image: 'assets/AILD_cover.jpg',
            description: 'As I Lay Dying is a story of a sounthern family troubled with grief and structural family issues going through the trials of burrying Addie Bundren, wife and mother of five main character children. The book records their difficult journey to Jefferson Mississippi, to bury Addie as per her dying request. The family meets several obsticles on their way and after nine days post mortum Addie is finally laid to rest and the family structure is just as fractured as it was in the beginning.',
            location: {
                center: [-89.4912723,34.28465033], 
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-movement',
            alignment: 'right',
            hidden: false,
            title: 'Tracking Movement',
            image: 'assets/dead bundren.jpg',
            description: 'As I lay Daying Usually stays pretty stationary and the women in this novel tend to travel with their families, much like Salvage the Bones. The only women in the novel are younger sister Dewey Dell, and deceased mother Addie Bundren, who both make their way to Jefferson Mississippi. However, They are at the whim of the men in the story. There isn"t much movement in the story, however this looks at the story of a southern white family.',
            location: {
                center: [-89.512580,34.3697383], 
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'chapter-end of AILD',
            alignment: 'Centered',
            hidden: false,
            title: 'Thematic Relation',
            image: 'assets/keezel hall.jpg',
            description: 'The over-arching themes in this novel are: XYZ and this shows how families movement paints a picture of agency especially in women.',
            location: {
                center: [-89.512580,34.3697383], 
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'chapter-Their eyes were watching God',
            alignment: 'Centered',
            hidden: false,
            title: 'Their Eyes were watching God',
            image: 'assets/TEWWG coverrr.jpg',
            description: 'Their Eyes Were Watching God is a story that follows Janie Crawford in her search for love across Florida in the midst of segregation. Later their house floods from an unexpectedly horrific hurricane that relocates Janie and her love interest Tea Cake.',
            location: {
                center: [-81.38643808,28.6185791], 
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'chapter-themes/ending',
            alignment: 'left',
            hidden: false,
            title: 'Agency and Themes',
            image: 'assets/keezel hall.jpg',
            description: 'Description of the themes here.',
            location: {
                center: [-80.44334557,26.8347516], 
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'chapter-Their eyes were watching God',
            alignment: 'Centered',
            hidden: false,
            title: 'Their Eyes were watching God',
            image: 'assets/keezel hall.jpg',
            description: 'Description of TEWWG...',
            location: {
                center: [-81.38643808,28.6185791], 
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'chapter-conclusion',
            alignment: 'fully',
            hidden: false,
            title: 'Conclusion',
            image: './assets/firestone_farm.jpg',
            description: 'Description of the Olinka people',
            location: {
                center: [-90.3150946, 38.6605671], 
                zoom: 3,
                pitch: 60.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
