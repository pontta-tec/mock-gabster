import { Controller, Get, Param, Query } from '@nestjs/common';
import * as PRODUTO_LIST_RESPONSE from './data/produto-list.json';
import {
  paginated,
  elementWithId,
  SINGLE_META_DEFAULT as meta,
} from './gabster.util';

@Controller('/v2/produto')
export class ProdutoController {
  @Get()
  findAll(@Query() query) {
    return paginated(PRODUTO_LIST_RESPONSE, query);
  }

  @Get('/:id')
  findById(@Param('id') id: string) {
    const object = elementWithId(PRODUTO_LIST_RESPONSE.objects, id);
    return { meta, object };
  }
}
