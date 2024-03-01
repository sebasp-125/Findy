import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../styles/PublicationAdd.css';
import { actionCreatePublicationAsync, actionDeletePublicationAsync, actionListPublicationsAsync } from '../redux/Actions/ActionPublication';

//Creando las Interface  para el tipado de los Datos. TypeScript
interface Publication {
  Id: string;
  Media: string;
  Description: string;
  LikesPublication: string;
  SharedPublication: string;
  ActionsPublication: string;
}

export default function AddPublication() {
  console.log("Entro a la función");
  const dispatch: any = useDispatch();
  const [publications, setPublications] = useState<Publication[]>([]);
  const [newId, setNewId] = useState<string>('');
  //Tenemos un objeto publicacion, El cual se le va a almacenar el valor
  //de los Inputs,   para hacer la publicacion como tal. y guardarla en el
  // Firestore.
  const addPublication = async () => {
    try {
      const recuperacionPublication: Publication[] = await dispatch(actionListPublicationsAsync());
      dispatch(actionCreatePublicationAsync({
        Media: formValues.Media,
        Description: formValues.Description,
        Likes: formValues.LikesPublication,
        Shared: formValues.SharedPublication,
        Comment: "S"
      }))
      setPublications(recuperacionPublication);
    } catch (error) {
      console.error('Error al recuperar las publicaciones:', error);
    }
  }
  
  // ----------------- ELIMINAR PUBLICACION ------------------ //
  const DelatePublication = async () => {
    try {
      // Eliminar la publicación utilizando la ID almacenada en newId
      await dispatch(actionDeletePublicationAsync(newId));

      // Actualizar la lista de publicaciones después de la eliminación
      const updatedPublications: Publication[] = await dispatch(actionListPublicationsAsync());
      setPublications(updatedPublications);

      // Limpiar la ID de la publicación seleccionada después de la eliminación
      setNewId('');
    } catch (error) {
      console.error('Error al eliminar la publicación:', error);
    }
  };


  //Almacenado los valores de los inputs, para despues manejarlos en el Object. 
  const [formValues, setFormValues] = useState<Publication>({
    Id: '',
    Media: '',
    Description: '',
    LikesPublication: '',
    SharedPublication: '',
    ActionsPublication: '',
  });
  
  //Guardar el Estado de los Input(.value)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  //setFormValues({ ...formValues, [name]: value });
  //Es una propiedad Computada. La cual tiene un estado "setFormValues" que esta conteniendo  Todo.

  //El operador Propagacion(...), Basicamente es para que me cree una copia cada vez que se ejecute. Y que no
  //me Reemplace si no que me agregue.

  //Aciva esto y veras de lo que te hablo.
  console.log(formValues);
  return (
    <div>
      <button onClick={addPublication}>ADD PUBLICATION</button>
      <button onClick={DelatePublication}>Borrar Publicación</button>
      {publications.map((publication, index) => (
        <div key={index} >
          <table>
            <tr>
              <th>Image Publication </th>
              <th>Description</th>
              <th>Likes Publication</th>
              <th>Shared</th>
              <th>Actions</th>
            </tr>
            <td>
              <td>
                <img className='imgPublicadas' key={publication.Id} src={publication.Media} alt="Media" onClick={() => setNewId(publication.Id)} />
              </td>
            </td>
            <td>
              <p>{publication.Description}</p>
            </td>
            <td>
              <p>{publication.LikesPublication}</p>
            </td>
            <td>
              <p>{publication.SharedPublication}</p>
            </td>
            <td>
              <p>{publication.SharedPublication}</p>
            </td>
          </table>
        </div>
      ))}
      <form>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          placeholder="Description"
          name="Description"
          value={formValues.Description}
          onChange={handleChange}
        />

        <label htmlFor="media">Media</label>
        <input
          type="text"
          placeholder="Media Fire"
          name="Media"
          value={formValues.Media}
          onChange={handleChange}
        />

        <label htmlFor="likesPublication">Likes Publication</label>
        <input
          type="text"
          placeholder="Likes Publications"
          name="LikesPublication"
          value={formValues.LikesPublication}
          onChange={handleChange}
        />

        <label htmlFor="sharedPublication">Shared Publication</label>
        <input
          type="text"
          placeholder="Shared Publication"
          name="SharedPublication"
          value={formValues.SharedPublication}
          onChange={handleChange}
        />

        <label htmlFor="actionsPublication">Actions Publication</label>
        <input
          type="text"
          placeholder="Actions Publication"
          name="ActionsPublication"
          value={formValues.ActionsPublication}
          onChange={handleChange}
        />
      </form>
    </div>
  )
}
