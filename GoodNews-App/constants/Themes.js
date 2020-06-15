const lightTheme = {
    headerBG : '#DDE9E8',
    sidebarBG: '#ECB6AD',
    feedBG: '#F7F7F7',
    headerText: '#2D6767',
    sidebarText: '#F7F7F7',
    feedText: '#ECB6AD',
};
const darkTheme = {
    headerBG : '#D6CCC2',
    sidebarBG: '#D6CCC2',
    feedBG: '#222328',
    headerText: '#222328',
    sidebarText: '#222328',
    feedText: '#D6CCC2',
};
const colorfullTheme = {
    headerBG : '#F7F3C2',
    sidebarBG: '#102042',
    feedBG: '#F7F7F7',
    headerText: '#102042',
    sidebarText: '#F7F3C2',
    feedText: '#102042',
};

export const getSidebarTheme = themeName => {
    if (themeName === 'light') return{
        sidebarContainer: {
            flex:1,
            backgroundColor: lightTheme.feedBG
        },
        sidebarDrawer: {
                flex:1,
                alignItems: 'center',
                backgroundColor: lightTheme.sidebarBG,
                borderBottomRightRadius: 30},
        sidebarText : {
            color: lightTheme.sidebarText,
            padding: 10,
            textAlign: "center"
        },
        sidebarDivider: {
            color: lightTheme.sidebarText,
            height: 2,
            width: 150,
            marginVertical: 20
        }
    }   
    if(themeName === 'dark') return{
        sidebarContainer: {
            flex:1,
            backgroundColor: darkTheme.feedBG,
            },
            sidebarDrawer: {
                flex:1,
                alignItems: 'center',
                backgroundColor: darkTheme.sidebarBG,
                borderBottomRightRadius: 30,
                opacity: 0.6
            },
        sidebarText : {
            color: darkTheme.sidebarText,
            padding: 10,
            textAlign: "center"
        },
        sidebarDivider: {
            color: darkTheme.sidebarText,
            height: 2,
            width: 150,
            marginVertical: 20
        }
    }
    return{
        sidebarContainer: {
            flex:1,
            backgroundColor: colorfullTheme.feedBG
        },
        sidebarDrawer: {
                flex:1,
                alignItems: 'center',
                backgroundColor: colorfullTheme.sidebarBG,
                borderBottomRightRadius: 30},
        sidebarText : {
            color: colorfullTheme.sidebarText,
            padding: 10,
            textAlign: "center"
        },
        sidebarDivider: {
            color: colorfullTheme.sidebarText,
            height: 2,
            width: 150,
            marginVertical: 20
        }
    }
};

export const getHeaderTheme = themeName => {
    if (themeName === 'light') return{
        header: {
            height: 60,
            paddingBottom: 20,
            backgroundColor: lightTheme.headerBG
        },
        headerText: {
            color: lightTheme.headerText ,
            fontSize: 20,
            fontWeight: "bold" 
        },
        headerButtons: {
            color: lightTheme.headerText
        }
    }
    if(themeName === 'dark') return{
        header: {
            height: 60,
            paddingBottom: 20,
            backgroundColor: darkTheme.headerBG
        },
        headerText: {
            color: darkTheme.headerText ,
            fontSize: 20,
            fontWeight: "bold" 
        },
        headerButtons: {
            color: darkTheme.headerText
        }
    }
    return{
        header: {
            height: 60,
            paddingBottom: 20,
            backgroundColor: colorfullTheme.headerBG
        },
        headerText: {
            color: colorfullTheme.headerText ,
            fontSize: 20,
            fontWeight: "bold" 
        },
        headerButtons: {
            color: colorfullTheme.headerText
        }
    }
};

export const getFeedTheme = themeName => {
    if (themeName === 'light') return{
        itemContainer : {
            flex:1,
            marginTop: 5,
            padding: 5,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: lightTheme.feedBG,
            borderRadius: 10,
            shadowColor: "black",
            shadowOpacity: 0.25,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 10,
            elevation: 10,
        },
        articleImage: {
            width: 300,
            height: 150,
        },
        src:{
            fontSize: 10,
            marginRight: 20,
        },
        title:{
            fontWeight: "bold",
            fontSize: 16,
            color: lightTheme.feedText
        },
        description: {
            fontSize: 12,
            color: lightTheme.feedText
        },
        feedBackground: {flex: 1, alignItems: "center", justifyContent:"center", backgroundColor: lightTheme.feedBG}
    };
    if(themeName === 'dark') return{
        itemContainer : {
            flex:1,
            marginTop: 5,
            padding: 5,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: darkTheme.feedBG,
            borderRadius: 10,
            shadowColor: "white",
            shadowOpacity: 0.25,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 10,
            elevation: 10,
        },
        articleImage: {
            width: 300,
            height: 150,
        },
        src:{
            fontSize: 10,
            marginRight: 20,
        },
        title:{
            fontWeight: "bold",
            fontSize: 16,
            color: darkTheme.feedText
        },
        description: {
            fontSize: 12,
            color: darkTheme.feedText
        },
        feedBackground: {flex: 1, alignItems: "center", justifyContent:"center", backgroundColor: darkTheme.feedBG}
    };
    return{
        itemContainer : {
            flex:1,
            marginTop: 5,
            padding: 5,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: colorfullTheme.feedBG,
            borderRadius: 10,
            shadowColor: "black",
            shadowOpacity: 0.25,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 10,
            elevation: 10,
        },
        articleImage: {
            width: 300,
            height: 150,
        },
        src:{
            fontSize: 10,
            marginRight: 20,
        },
        title:{
            fontWeight: "bold",
            fontSize: 16,
            color: colorfullTheme.feedText
        },
        description: {
            fontSize: 12,
            color: colorfullTheme.feedText
        },
        feedBackground: {flex: 1, alignItems: "center", justifyContent:"center", backgroundColor: colorfullTheme.feedBG}
    };
};