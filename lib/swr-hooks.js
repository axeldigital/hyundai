import useSWR from 'swr'

function fetcher(url) {
  return window.fetch(url).then((res) => res.json())
}

export function useEntries() {
  const { data, error } = useSWR(`/api/get-entries`, fetcher)

  return {
    entries: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export function getUser(email, password) {
  const { data, error } = useSWR(`/api/get-user?email=${email}&password=${password}`, fetcher)

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export function useEntry(id) {
  return useSWR(`/api/get-entry?id=${id}`, fetcher)
}