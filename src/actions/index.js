import { SET_RECENT_POSTS, SET_RESULTS_POSTS } from './types';

import axios from 'axios';

export function fetchRecentPosts() {
    return function(dispatch) {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            dispatch({
                type: SET_RECENT_POSTS,
                payload: response.data
            })
        }); 
    }
  }

  export function fetchPostsWithQuery(query, callback) {
    return function(dispatch) {
        // Verifica que query sea un objeto y tenga la propiedad 'query'
        if (typeof query === 'object' && query.query) {
            query = query.query;
        } else {
            console.error('El parámetro query debe ser un objeto con la propiedad "query" que contenga una cadena de texto');
            return;
        }

        // Verifica el valor de query después de la comprobación
        console.log('Valor de query después de la comprobación:', query);

        axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
            .then(response => {
                // Asegúrate de que response.data.results exista y sea un array
                if (response.data && response.data.results) {
                    dispatch({
                        type: SET_RESULTS_POSTS,
                        payload: response.data.results
                    })
                    callback();
                } else {
                    console.error('Estructura de datos inesperada:', response.data);
                }
            })
            .catch(error => {
                console.error('Error al obtener los datos:', error);
            }) 
    }
  }