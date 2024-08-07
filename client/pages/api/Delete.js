import instance from '@g/api'
import v        from '@g/_var'

async function deleteClient(id) {
  try {
    const res =  await instance.delete(`${v.DEL_CLIENT}/${id}`)
    return res
  } catch (err) { console.error(err) }
}

async function deleteAdmin(id) {
  console.log(id);
  try {
    const res = await instance.delete(`${v.DEL_ADMIN}/${id}`)
    return res
  } catch (err) { console.error(err) }
}

export { deleteClient, deleteAdmin }