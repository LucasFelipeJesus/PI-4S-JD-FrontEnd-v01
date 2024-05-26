import { Button, Stack } from "@chakra-ui/react";
import {
  Tr,
  Td,
} from '@chakra-ui/react'

interface ItemEquipmentProps {
    id: number;
    description: string;
    model: string;
    category: string;
    vistoria: number; 
    deleteEquipment(id: number): void
}

function ItemEquipment({ id, description, model, category, vistoria, deleteEquipment }: ItemEquipmentProps) {
    return (
        <Tr>
            <Td>{id}</Td>
            <Td>{description}</Td>
            <Td>{model}</Td>
            <Td>{category}</Td>
            <Td>{vistoria}</Td>
            <Td>
                <Stack spacing={2} direction='row' justify='flex-end'>
                <Button width={'90px'} size={'sm'} colorScheme="blue">Editar</Button>
                <Button width={'90px'} size={'sm'} onClick={() => deleteEquipment(id)} colorScheme="red">Remover</Button>
                </Stack>
            </Td>
        </Tr>
    )
}

export default ItemEquipment;