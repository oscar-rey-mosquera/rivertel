import supabase from '@/services/supabase';

export async function authenticated(to, from , next){
    const user = await supabase.getUserAuthenticated();
    if(user) next()
    else next({name: 'admin-login'})
}

export async function guest(to, from , next){
    const user = await supabase.getUserAuthenticated();
    if(!user) next()
    else next({name: 'admin'})
}