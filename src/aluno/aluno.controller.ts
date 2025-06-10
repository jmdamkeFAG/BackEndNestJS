import { Controller, Get, Post, Body, Param, Put, Delete, Patch, Query } from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { CreateAlunoDTO } from './dto/createAlunoDto';
import { UpdateAlunoDTO } from './dto/updateAlunoDto';

@Controller('alunos')
export class AlunoController {
  constructor(private readonly alunoService: AlunoService) {}

  @Get()
  findAll(
    @Query('nome') nome: string,
    @Query('curso') curso: string,
    @Query('sort') sort: 'nome' | 'curso' = 'nome',
    @Query('order') order: 'asc' | 'desc' = 'asc',
  ) {
    return this.alunoService.findAll(nome, curso);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alunoService.findOne(id);
  }

  @Post()
  async create(@Body() createAlunoDTO: CreateAlunoDTO) {
    return this.alunoService.create(createAlunoDTO);
  }

  @Patch(':id')
  @Put(':id')
  update(@Param('id') id: string, @Body() updateAlunoDTO: UpdateAlunoDTO ) {
    return this.alunoService.update(id, updateAlunoDTO);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.alunoService.delete(id);
  }
}