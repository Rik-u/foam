import { supabase } from '@/utils/supabase/client'
import type { ItemType } from '@/types/item' 

//Add new item
export async function addItem(item: Omit<ItemType, 'item_id'>): Promise<ItemType> {
  const { data, error } = await supabase.from('items').insert(item).single();
  if (error) throw error;
  return data;
}

//Fetch all items
export async function getItems(): Promise<ItemType[]> {
    const { data, error } = await supabase.from('items').select('*');
    if (error) throw error;
    return data;
}

//Delete by id
export async function deleteItem(id : number): Promise<void> {
    const { error } = await supabase.from('items').delete().eq('item_id', id);
    if (error) throw error;
}