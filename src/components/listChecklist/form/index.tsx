import { useEffect, useRef, useState } from "react"
import { ListChecklist } from "../../../interfaces/listChecklist"
import { Button, Flex, HStack, Input, Select } from "@chakra-ui/react"

interface FormListChecklistProps {
    ListChecklists: ListChecklist[]
    setListChecklists: (ListChecklists: ListChecklist[]) => void
}

function FormListChecklist({ ListChecklists, setListChecklists }: FormListChecklistProps) {

    const [description, setDescription] = useState('')
    /*const [model, setModel] = useState('')
    const [category, setCategory] = useState('')
    const [ListChecklist, setListChecklist] = useState('')*/

    function addListChecklist() {
        if(ListChecklists.length > 0) {
            const lastId = ListChecklists[ListChecklists.length - 1].id
            const newListChecklist = {id: lastId + 1, description: description/*, model: model, category: category, ListChecklist: ListChecklist*/}
            setListChecklists([...ListChecklists, newListChecklist])
        }
    }

    const inputListChecklist = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if(inputListChecklist.current) inputListChecklist.current.focus()
    }, [])

    return (
        <Flex w={'150vh'} alignItems='center' justifyContent='space-around' p={2}>
            <HStack spacing={4}>
                <Input
                    ref={inputListChecklist}
                    variant='outline'
                    type="text"
                    placeholder="Descrição"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <Select placeholder="checklist" width={'300px'}>
                    <option value="1">checklist 1</option>
                    <option value="2">checklist 2</option>
                    <option value="3">checklist 3</option>
                    <option value="4">checklist 4</option>
                    
                </Select>
            </HStack>
            <Button size={"sm"} width='90px' onClick={addListChecklist} colorScheme="green">Adicionar</Button>
        </Flex>

    )
}

export default FormListChecklist