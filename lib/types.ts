export interface User {
  id: string
  email: string
  name: string
  role: 'admin' | 'sales' | 'manager'
  team_id: string
}

export interface Contact {
  id: string
  name: string
  email?: string
  phone?: string
  company?: string
  designation?: string
  status: 'lead' | 'prospect' | 'customer' | 'lost'
  source?: string
  owner_id?: string
  team_id: string
  notes?: string
  created_at: string
}

export interface Deal {
  id: string
  name: string
  contact_id: string
  value?: number
  currency: string
  stage: 'prospect' | 'negotiation' | 'proposal' | 'won' | 'lost'
  probability: number
  close_date?: string
  owner_id?: string
  team_id: string
  created_at: string
}

export interface Interaction {
  id: string
  contact_id: string
  type: 'call' | 'email' | 'meeting' | 'note'
  title: string
  description?: string
  outcome?: string
  scheduled_at?: string
  completed_at?: string
  owner_id?: string
  team_id: string
  created_at: string
}

export interface Task {
  id: string
  title: string
  description?: string
  contact_id?: string
  deal_id?: string
  priority: 'low' | 'medium' | 'high'
  status: 'open' | 'completed'
  due_date?: string
  assigned_to?: string
  team_id: string
  created_at: string
}

export interface DashboardMetrics {
  total_contacts: number
  total_deals: number
  total_deals_value: number
  won_deals_this_month: number
  open_tasks: number
  upcoming_interactions: number
}
