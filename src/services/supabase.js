import { router } from "@/routes";
import env from "@/env";
import { createClient } from "@supabase/supabase-js";

class Supabase {
  constructor() {
    this.supabaseClient = createClient(
      env.supabase_url,
      env.supabase_public_key,
      {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
      }
    );
  }

  /**
   * login de usuarios en el servicio supabase
   *
   * @param {string} email
   * @param {string} password
   */
  async login(email, password) {
    let { user, error } = await this.supabaseClient.auth.signIn({
      email,
      password,
    });
    return { user, error };
  }

  /**
   *  registro de usuarios en el servicio supabase
   * @param {string} email
   * @param {string} password
   */
  async signup(email, password) {
    let { user, error } = await this.supabaseClient.auth.signUp({
      email,
      password,
    });

    return { user, error };
  }

  /**
   * Salir de sesion actual
   */

  async logout() {
    let { error } = await this.supabaseClient.auth.signOut();
    router.push({ name: "admin-login" });
  }

  /**
   * datos de usuario actual mente autenticado
   */
  async getUserAuthenticated() {
    const user = await this.supabaseClient.auth.user();
    return user;
  }

  /**
   * autenticacion de usuarios por link enviado al correo electronico
   */

  async LoginUserWithLink(email) {
    let { user, error } = await this.supabaseClient.auth.signIn({
      email,
    });

    return !error
      ? alert(`Te hemos enviado un email a tu correo ${email}`)
      : alert(error.message);
  }

  /**
   * Cargar imagen en supabase
   * @param {string} bucket
   * @param {File}  file
   */

  async UploadFile(bucket, file) {
    const { data } = await this.supabaseClient.storage
      .from(bucket)
      .upload(file.name, file);
    return data;
  }

  /**
   * Cargar imagen en supabase
   * @param {string} bucket
   */
  async getlistFile(bucket) {
    let { data, error } = await this.supabaseClient.storage.from(bucket).list();
    data = data.map((file) => {
      return { ...file, url: this.getUrlFile(bucket, file.name) };
    });

    return data;
  }

  /**
   * cojer url de imagen en supabase
   * @param {string} fileName
   * @param {string} bucket
   */

  getUrlFile(bucket, fileName) {
    const { publicURL } = this.supabaseClient.storage
      .from(bucket)
      .getPublicUrl(fileName);
    return publicURL;
  }

  /**
   * eliminar imagen en supabase
   * @param {string} bucket
   * @param {string} nameImage
   */

  async deleteFile(bucket, nameImage) {
    const imageArrayName = [];
    imageArrayName.push(nameImage);
    const { data } = await this.supabaseClient.storage
      .from(bucket)
      .remove(imageArrayName);

    return data;
  }

  /**
   * @typedef {object} NewsType
   * @property {string} tittle
   * @property {string} url_image
   * @property {string} news_summary
   * @property {string} content
   * @property {string?} id
   * @property {string?} created_at
   */

  /**
   *  crear noticia en supabase
   * @param {NewsType} param0
   */

  async createNews({ tittle, url_image, news_summary, content = "" }) {
    try {
      const { data, error } = await this.supabaseClient
        .from("news")
        .insert([{ tittle, url_image, news_summary, content }]);

      return { data, error };
    } catch (error) {
      alert(error.message);
    }
  }

  /**
   * 
   * @typedef {object}  PostgrestError 
   * @property { string} message
   * @property { string} details
   * @property { string} hint
   * @property { string} code
   */

  /**
   * @typedef {object} GetnewsType
   * @property {Array<NewsType>} data
   * @property {PostgrestError} error
   *
   */

  /**
   * retorna una array de noticias
   * @returns {Promise<GetnewsType>}
   */

  async getNews() {
    try {
      const { data, error } = await this.supabaseClient
        .from("news")
        .select("*");

      return { data, error };
    } catch (error) {
      alert(error.message);
    }
  }


  /**
   * @description Eliminar una notcia de supabase pasando el id de esta
   * @param {string} id
   */
   async deleteNew(id){
     try {
         const {data, error} = await this.supabaseClient.from('news').delete().eq('id', id);
         return {data, error};
     } catch (error) {
      alert(error.message);
     }
   }
     /**
   * @description Devuelve una noticia pasando un id a la funcion
   * @param {string} id
   */

   async getOneNews(id) {
     
      const {data,error} = await this.supabaseClient.from('news').select().eq('id', id);
      
      if(!error) return {data}
      else alert(error.message);
     
   }

}

export default new Supabase();
