import { Controller, Get, Param, Query } from '@nestjs/common';
import * as PRODUTO_GRUPO_LIST_RESPONSE from './data/produto-grupo-list.json';
import * as PRODUTO_GRUPO_RESPONSE from './data/produto-grupo.json';
import { paginated } from './gabster.util';

@Controller('/v2/produto-grupo')
export class ProdutoGrupoController {
  @Get()
  findAll(@Query() query) {
    return paginated(PRODUTO_GRUPO_LIST_RESPONSE, query);
  }

  @Get('/:id')
  findById(@Param('id') id: string) {
    PRODUTO_GRUPO_RESPONSE.object.id = id;
    return PRODUTO_GRUPO_RESPONSE;
  }
}
