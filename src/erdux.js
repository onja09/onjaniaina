import { configureStore, createSlice } from "@reduxjs/toolkit";


const TransportSlice=createSlice({

    name:'transport',
    initialState:{
        connexion:false,
        inscription:false,
        show:'Acceuil',
        email:"",
        nom:'',
        photo:'',
        id_user:'',
        localisationDBClic:'',
        LocalisationDblClicArrive:'',
        Distance:"",
        Duree:"",
        CloseCarte_debut:false,
        CloseCarte_fin:false,
        itineraire:[]
    },
    
    reducers:{
        SET_CONNEXION_ACTIVE: (state, action)=>{
            state.connexion=action.payload.CONNEXION
        },
        SET_INSCRIPTION_ACTIVE: (state, action)=>{
            state.inscription=action.payload.INSCRIPTION
        },
        SET_SHOW_ACTIVE: (state, action)=>{
            state.show=action.payload.SHOW
        },
        SET_ACTIVE_USER: (state, action)=>{
            state.email=action.payload.EMAIL
            state.nom=action.payload.USERNAME
            state.photo=action.payload.PHOTO
            state.id_user=action.payload.USERID
        }, 
        REMOVE_ACTIVE_USER: (state, action)=>{
            state.email=""
            state.nom=""
            state.photo=""
            state.id_user=""
        },
        SET_LOCALISATION_BDCLICKS: (state, action)=>{
            state.localisationDBClic=action.payload.LOCALISATION_DEPART  
        },
        SET_LOCALISATION_BDCLICKS_ARRIVE: (state, action)=>{
            state.LocalisationDblClicArrive=action.payload.LOCALISATION_ARRIVE
            
        },
        SET_ACTIVE_DISTANCE: (state, action)=>{
            state.Distance=action.payload.DISTANCE
            
        },
        SET_ACTIVE_DURRE: (state, action)=>{
            state.Duree=action.payload.DURRE 
        },  
        SET_CLOSE_CARTES_DEBUT: (state, action)=>{
            state.CloseCarte_debut=action.payload.DEPART_ARRIVE 
        }, 
        SET_CLOSE_CARTES_FIN: (state, action)=>{
            state.CloseCarte_fin=action.payload.DEPART_FIN 
        }, 
        SET_TINERAIRE: (state, action)=>{
            
            state.itineraire=action.payload.INITERAIRE 
        }, 
        
    }
});
export const {SET_TINERAIRE, SET_ACTIVE_DURRE,SET_CONNEXION_ACTIVE,SET_INSCRIPTION_ACTIVE,SET_SHOW_ACTIVE,SET_ACTIVE_USER,REMOVE_ACTIVE_USER,SET_LOCALISATION_BDCLICKS,SET_LOCALISATION_BDCLICKS_ARRIVE,SET_CLOSE_CARTES_DEBUT,SET_CLOSE_CARTES_FIN,SET_ACTIVE_DISTANCE}=TransportSlice.actions;
export const storeTransport=configureStore({
    reducer:{
        Storetransport: TransportSlice.reducer
    }
})