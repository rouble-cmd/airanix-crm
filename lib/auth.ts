import { supabase } from './supabase'

export async function login(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) throw error
    return { user: data.user, session: data.session }
  } catch (error) {
    throw error
  }
}

export async function logout() {
  await supabase.auth.signOut()
}

export async function getCurrentSession() {
  const { data, error } = await supabase.auth.getSession()
  return data.session
}

export async function getUserProfile(userId: string) {
  const { data, error } = await supabase
    .from('crm_users')
    .select('*')
    .eq('id', userId)
    .single()
  
  if (error) throw error
  return data
}
