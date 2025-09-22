import { supabase } from '@/utils/supabase/client'
import type { ItemType } from '@/types/item' 
import { Item } from '@/models/Item';

//Add new item
export async function addItem(item: Omit<ItemType, 'item_id'>): Promise<ItemType> {
  const { data, error } = await supabase.from('items').insert(item).single();
  if (error) throw error;
  return data;
}

//Get all items
export async function getItems(): Promise<ItemType[]> {
  const { data, error } = await supabase.from('items').select('*');
  if (error) throw error;
  return data;
}

//Get by id
export async function getItemById(id: number): Promise<ItemType> {
  const { data, error } = await supabase.from('items').select().eq('item_id', id).single()
  if (error) throw error;
  return data;
}

//Delete by id
export async function deleteItemById(id : number): Promise<void> {
    const { error } = await supabase.from('items').delete().eq('item_id', id);
    if (error) throw error;
}

export async function updateItemById(item : Item): Promise<void> {
  const { error } = await supabase.from('items').update({ ...item }).eq('item_id', item.item_id);
  if (error) throw error; 
}