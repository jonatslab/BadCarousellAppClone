import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import {
    createMaterialTopTabNavigator,
    createStackNavigator,
    createSwitchNavigator
    } from 'react-navigation';
import {
    Browse,
    Groups,
    Activity,
    User,
    Search,
    SearchHeader,
    Likes,
    Messages,
    TopNavigation,
    Login,
    AuthCheck,
    Terms,
    Policy
} from './components';

const SearchNav = createStackNavigator({
    Search
},
{   
    headerMode: 'none'
})
const LikesNav = createStackNavigator({
    Likes
},
{   
    headerMode: 'none'
})
const MessagesNav = createStackNavigator({
    Messages
},
{   
    headerMode: 'none'
})


const BottomAppNavigator = createMaterialTopTabNavigator({
    Browse: { screen: Browse },
    Groups: { screen: Groups },
    Activity: { screen: Activity },
    User: { screen: User }
},
{
    initialRouteName: 'Browse',
    tabBarOptions:{
        style: {
            backgroundColor: '#d22d2d'
        },
        indicatorStyle: {
            height: 0
        }
    }
})

const AppNavigator = createStackNavigator({
    SearchNav: { screen: SearchNav,
                navigationOptions: {
                    headerTitle: <SearchHeader />,
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: '#d22d2d'
                    }
                }
    },
    LikesNav : { screen: LikesNav,
                navigationOptions: {
                    headerTitle: 'Stuff Liked',
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: '#d22d2d'
                    },
                    headerTitleStyle: {
                        fontSize: 24
                    }
                }
    },
    MessagesNav : { screen: MessagesNav,
                navigationOptions: {
                    headerTitle: 'Inbox',
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: '#d22d2d',
                    },
                    headerTitleStyle: {
                        fontSize: 24
                    }
                }
    },
    BottomTabs: { screen: BottomAppNavigator,
                navigationOptions: ({ navigation }) => ({
                    header: <TopNavigation navigation={navigation} />
                })
    }
},
{
    initialRouteName: 'BottomTabs',
    headerMode: 'float' 
     
})

const AuthNavigator = createStackNavigator({
    Login: { screen: Login,
            navigationOptions: {
                header: null
            }
    },
    Policy: { screen: Policy,
            navigationOptions: {
                headerTitle: 'Privacy Policy',
                headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: '#d22d2d',
                } 
            }
    },
    Terms: { screen: Terms,
            navigationOptions: {
                headerTitle: 'Terms and Service',
                headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: '#d22d2d',
                } 
            }
    },
},
{
    initialRouteName: 'Login' 
})

const MainNavigator = createSwitchNavigator({
    AuthCheck,
    AppNavigator,
    AuthNavigator
},
{
    initialRouteName: 'AuthCheck'
})



export { MainNavigator };